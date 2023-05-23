const React = require('react');

const Layout = require('../Layout');

module.exports = function Register({ userSession }) {
  return (
    <Layout>
      <h1>Create a Broccoli Blog Account</h1>

      <form id="registerForm" method="post" action="/entries/register">
        <label htmlFor="username-input" className="block mar-b-1">
          Username:
        </label>
        <input
          id="username-input"
          name="userName"
          type="text"
          tabIndex="1"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />
        <label htmlFor="email-input" className="block mar-b-1">
          E-mail:
        </label>
        <input
          id="email-input"
          name="email"
          type="email"
          tabIndex="2"
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
          tabIndex="3"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />

        <input
          type="submit"
          value="Create Account"
          tabIndex="4"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </Layout>
  );
};
