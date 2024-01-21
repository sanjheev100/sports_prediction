import React from "react";
import "./App.css";
import { FaTelegram } from "react-icons/fa";
import { Helmet } from "react-helmet";

function App() {
  const openNewWindow = () => {
    window.open("https://t.me/football_1xbet_slips", "_blank");
  };

  const copyToClipboard = () => {
    const tempEl = document.createElement("textarea");
    tempEl.value = "@football_1xbet_slips";
    document.body.appendChild(tempEl);

    tempEl.select();
    tempEl.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");

      window.alert(`Please Search in telegram @football_1xbet_slips (copied)`);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }

    document.body.removeChild(tempEl);
  };

  return (
    <div className="App">
      <Helmet>
        <title>
          Sports Predictions - Find the Best Football and 1xBet Slips
        </title>
        <meta
          name="description"
          content="Get accurate sports and football predictions. Safe betting with 1xBet slips. Join our Telegram for the latest updates."
        />
        <meta
          name="keywords"
          content="sports prediction, football prediction, 1xbet slip, safebet,cricket prediction,free betting tips,free sports prediction,ai bet predictions"
        />
      </Helmet>
      <div className="content">
        <h2>Today Sports Predictions</h2>
        <p>
          We are providing sports prediction on our telegram channel. 100%
          analyzed predictions which will be posted.
        </p>
        <br />
        <p>Site Under Construction Untill then Please join us at telegram 👇🏻</p>
        <button onClick={openNewWindow}>
          <span>Join Us</span> &nbsp;
          <FaTelegram />
        </button>

        <div className="channel-info">
          <span>@football_1xbet_slips</span>
          <i className="copy-icon" onClick={copyToClipboard}>
            📋
          </i>
        </div>
      </div>
    </div>
  );
}

export default App;
