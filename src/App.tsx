import "./App.css";
import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="w-full min-h-screen bg-gray-800 text-blue-200 flex flex-col">
      <div className="w-full py-4 bg-gray-900 flex justify-center">
        <div className="max-w-[1400px] w-[90%] flex justify-between items-center">
          <h1 className="text-lg font-semibold">react-confirm-prompt</h1>
          <div className="flex gap-4 items-center ">
            <a
              className="text-xl hover:text-blue-100"
              href="https://github.com/nipun-dezoysa/react-confirm-prompt"
            >
              <FaGithub />
            </a>
            <a
              className="text-4xl hover:text-blue-100"
              href="https://www.npmjs.com/package/react-confirm-prompt"
            >
              <FaNpm />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-44 gap-3">
        <h1 className=" font-bold text-4xl">{result}</h1>
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
      </div>
    </div>
  );
}

export default App;
