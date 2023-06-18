import React from "react";
function App() {

  return (
    <>
      <div>I am App Component on Electron</div>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification('Electron Notification');
        }}
      >
        Notify
      </button>
    </>
  );
}

export default App;
