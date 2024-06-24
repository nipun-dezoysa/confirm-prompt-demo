import "./App.css";
import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  return (
    <>
    <h1>{result}</h1>
      <button
        className="gg"
        onClick={() =>
          showConfirm("Are you sure?", {
            description:
              "This action cannot be undone. All values associated with this field will be lost.",
            type: "warning",
          }).then((res) => {
            if (res) {
              setResult("Confirmed");
            } else {
              setResult("Canceled");
            }
          })
        }
      >
        Show Confirm Box
      </button>
    </>
  );
}

export default App;
