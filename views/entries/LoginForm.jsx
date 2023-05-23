const React = require('react');

const Layout = require('../Layout');

function LoginForm({ userSession, id }) {
  return (
    <Layout id={id} userSession={userSession}>
      <script defer src="/js/login.js" />
      <h1>Login a Broccoli Blog Account</h1>

      <form id="loginForm">
        <label htmlFor="email-input" className="block mar-b-1">
          E-mail:
        </label>
        <input
          id="email-input"
          name="email"
          type="email"
          tabIndex="1"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />

        <label htmlFor="password-input" className="block mar-b-1">
          Password:
        </label>
        <input
          id="password-input"
          name="password"
          type="password"
          tabIndex="2"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />

        <input
          type="submit"
          value="Login"
          tabIndex="3"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
        <span id="loginError" style={{ color: 'red', display: 'none' }} />
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
