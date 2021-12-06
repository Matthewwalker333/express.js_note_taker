// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  // If no matching route is found default to index
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};