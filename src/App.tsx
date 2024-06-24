import "./App.css";
import { showConfirm } from "react-confirm-prompt";

function App() {
  return (
    <>
      <button
        onClick={() =>
          showConfirm("Are you sure?", {
            description:
              "This action cannot be undone. All values associated with this field will be lost.",
            type: "warning",
          })
        }
      >
        Show Confirm Box
      </button>
    </>
  );
}

export default App;
