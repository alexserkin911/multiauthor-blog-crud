const React = require('react');

module.exports = function Layout({ children, userSession }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />

        <script defer src="/js/application.js" />

        <title>Broccoli Blog</title>
      </head>

      <body>
        <header
          role="banner"
          className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white"
        >
          <div className="max-w-700 center wrap-float">
            <nav className="clearfix mar-b-1">
              <div className="logo-container1">
                <div className="logo-container-header">
                  <img
                    className="logo1 left block"
                    src="/images/logo.png"
                    alt="logo"
                  />
                  <h3>Broccoli Blog</h3>
                </div>
                <ul className="no-bullets no-margin no-padding right">
                  {userSession ? (
                    <li className="pipe-separate t-light-green left">
                      Hi, {userSession}
                    </li>
                  ) : (
                    <li className="pipe-separate t-light-green left">
                      <a href="/entries/register">register</a>
                    </li>
                  )}
                  {userSession ? (
                    <li className="pipe-separate t-light-green left">
                      <a href="/entries/logout">logout</a>
                    </li>
                  ) : (
                    <li className="pipe-separate t-light-green left">
                      <a href="/entries/login">login</a>
                    </li>
                  )}
                  <li className="pipe-separate t-light-green left">
                    <a href="/">home</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="logo-container">
              <img
                className="logo center block"
                src="/images/broccoli_n3edll_64369ba8a2.jpg "
                alt="logo"
              />
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">{children}</div>
        </div>
      </body>
    </html>
  );
};
