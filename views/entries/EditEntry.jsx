const React = require('react');
const Layout = require('../Layout');

module.exports = function EditEntry({ entry }) {
  return (
    <Layout>
      <h1>Revise your thoughts on broccoli ...</h1>

      <form id="editEntryForm" data-entryid={entry.id}>
        <label htmlFor="title-input" className="block mar-b-1">Title:</label>
        <input
          id="title-input"
          name="title"
          type="text"
          value={entry.title}
          tabIndex="1"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
        <textarea
          id="body-textarea"
          name="body"
          tabIndex="2"
          className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
          value={entry.body}
        />

        <input
          type="submit"
          value="Update"
          tabIndex="3"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </Layout>
  );
};
