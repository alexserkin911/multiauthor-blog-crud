const React = require('react');

const Layout = require('../Layout');

module.exports = function EntriesList({ entries, userSession }) {
  return (
    <Layout userSession={userSession}>
      {userSession ? (
        <a
          href="/entries/new"
          className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center"
        >
          Write about Broccoli
        </a>
      ) : (
        <a
          href="/entries"
          className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center"
        >
          Войдите, чтобы добавить запись.
        </a>
      )}

      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {entries.map((entry) => (
            <li className="entry-item pad-b-4" key={entry.id}>
              <a
                href={`/entries/${entry.id}`}
                className="entry-title font-2 pad-b-1-4 c-white"
              >
                {entry.title}
              </a>
              <span className="entry-date block font-3-4 c-lt-gray">
                Written on {entry.createdAt.toString()} | Broccoli blog by{' '}
                {entry.User ? entry.User.dataValues.userName : 'Anonymous'}
              </span>
              <p className="entry-stub">{entry.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
