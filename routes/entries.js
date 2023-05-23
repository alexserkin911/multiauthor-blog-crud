const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();
const bcrypt = require('bcrypt');

const EntriesList = require('../views/entries/EntriesList');
const ShowEntry = require('../views/entries/ShowEntry');
const EditEntry = require('../views/entries/EditEntry');
const NewEntry = require('../views/entries/NewEntry');
const Error = require('../views/Error');
const Register = require('../views/entries/Register');

const { Entry, User } = require('../db/models');
const LoginForm = require('../views/entries/LoginForm');

router.get('/', async (req, res) => {
  try {
    const entries = await Entry.findAll({
      order: [['id', 'DESC']],
      include: [{ model: User }],
    });

    const entriesList = React.createElement(EntriesList, {
      entries,
      userSession: req.session?.user || '',
    });
    const html = ReactDOMServer.renderToStaticMarkup(entriesList);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (error) {
    const errorPage = React.createElement(Error, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

router.get('/register', (req, res) => {
  const register = React.createElement(Register, {
    userSession: req.session?.user || '',
  });
  const html = ReactDOMServer.renderToStaticMarkup(register);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  try {
    const newEntry = await Entry.create(
      {
        title: req.body.title,
        body: req.body.body,
        id_user: req.session.userId,
      },
      {
        returning: true,
        plain: true,
      }
    );

    res.redirect(`/entries/${newEntry.id}`);
  } catch (error) {
    const errorPage = React.createElement(Error, {
      message: 'Не удалось добавить запись в базу данных.',
      error: {},
    });

    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

router.get('/login', (req, res) => {
  const login = React.createElement(LoginForm, {
    userSession: req.session?.user || '',
  });
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user.userName;
        req.session.userId = user.id;
        res.json({
          msg: 'Добро пожаловать!',
          id: user.id,
          userName: user.userName,
        });
      } else {
        res.json({ msg1: 'Неверный пароль' });
      }
    } else {
      res.json({ msg2: 'Такой пользователь не найден, зарегистрируйтесь!' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: 'Пользователь с такой почтой уже существует' });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        userName,
        email,
        password: hashPassword,
      });
      req.session.userId = newUser.id;
      req.session.user = newUser.userName;
      res.json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: 'Произошла ошибка при регистрации' });
  }
});

router.get('/new', (req, res) => {
  const newEntry = React.createElement(NewEntry, {
    userSession: req.session?.user || '',
  });
  const html = ReactDOMServer.renderToStaticMarkup(newEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('BlogCookie');
    res.redirect('/entries');
  });
});

router.get('/:id', async (req, res) => {
  try {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    // console.log(entry.id_user);
    // console.log(req.session.userId);
    if (entry.id_user === req.session.userId) {
      const showEntry = React.createElement(ShowEntry, {
        entry,
        userSession: req.session?.user || '',
      });
      const html = ReactDOMServer.renderToStaticMarkup(showEntry);
      res.write('<!DOCTYPE html>');
      res.end(html);
    } else {
      const errorPage = React.createElement(Error, {
        message: 'У вас нет доступа к этой записи.',
        error: {},
      });

      const html = ReactDOMServer.renderToStaticMarkup(errorPage);
      res.write('<!DOCTYPE html>');
      res.end(html);
    }
  } catch (error) {
    const errorPage = React.createElement(Error, {
      message: 'Не удалось получить запись из базы данных.',
      error: {},
    });

    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const entry = await Entry.findByPk(id);
//     const showEntry = React.createElement(ShowEntry, {
//       entry,
//       userSession: req.session?.user || '',
//     });
//     const html = ReactDOMServer.renderToStaticMarkup(showEntry);
//     res.write('<!DOCTYPE html>');
//     res.end(html);
//   } catch (error) {
//     console.error(error);
//   }
// });

router.put('/:id', async (req, res) => {
  try {
    const entry = await Entry.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }
    );

    res.json({ isUpdateSuccessful: true, entryID: entry[1].id });
  } catch (error) {
    res.json({
      isUpdateSuccessful: false,
      errorMessage: 'Не удалось обновить запись в базе данных.',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Entry.destroy({ where: { id: req.params.id } });
    res.json({ isDeleteSuccessful: true });
  } catch (error) {
    res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить запись из базы данных.',
    });
  }
});

router.get('/:id/edit', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });

  const editEntry = React.createElement(EditEntry, { entry });
  const html = ReactDOMServer.renderToStaticMarkup(editEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
