const path = require('path');
function loadReactDevTools(application, session) {
  application.whenReady().then(async () => {
    await session.defaultSession.loadExtension(
      path.join(__dirname, 'fmkadmapgofadopljbjfkapdkoienihi'),
      // allowFileAccess is required to load the devtools extension on file:// URLs.
      { allowFileAccess: true }
    );
  });
}
module.exports = { loadReactDevTools };
