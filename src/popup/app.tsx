import React, { useEffect, useState } from "react";
import { storageFunction } from "@/shared/storage-comms";

function App() {
  const [data, setData] = useState<undefined | any>(undefined);
  const [req, _set] = useState(
    storageFunction((data) => {
      if (data.field == "windowVariable") {
        setData(() => data.data);
      }
    })
  );
  useEffect(() => {
    req.get({ field: "windowVariable" });
  }, []);
  return (
    <div className="App bg-slate-500 w-60 h-fit">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This an example for a popup.</p>
        <p>The last windowVariable is: {data}</p>
        <button
          onClick={() => {
            chrome.runtime.sendMessage("landing");
          }}
        >
          View Landing Page
        </button>
      </header>
    </div>
  );
}

export default App;
