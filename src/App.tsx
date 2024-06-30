import "./App.css";
import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { useRef } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";
function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [result, setResult] = useState("");
  const [options, setOptions] = useState({});
  const [title, setTitle] = useState("Are you sure?");
  const [des, setDes] = useState(
    "This action cannot be undone. All values associated with this field will be lost."
  );

  useAutosizeTextArea(textAreaRef.current, des);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setDes(val);
  };

  return (
    <div className="w-full min-h-screen bg-gray-800 text-blue-200 flex flex-col gap-10">
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
      <div className="w-full flex justify-between gap-3">
        <div className="w-[50%] flex flex-col items-center gap-4">
          <div className="side-section">
            <h1 className="text-2xl font-semibold">Playground</h1>
            <p className="text-lg">
              A simple and customizable confirm box for React.
            </p>
          </div>
          <div className="side-section">
            <p className="side-title">Title</p>
            <input
              type="text"
              className="side-text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="side-section">
            <p className="side-title">Description</p>
            <textarea
              id="review-text"
              onChange={handleChange}
              placeholder="Description"
              className="side-text"
              ref={textAreaRef}
              rows={2}
              value={des}
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center">
          <h1 className=" font-bold text-4xl">{result}</h1>
          <button
            className="gg"
            onClick={() =>
              showConfirm(title, {
                description:
                  "",
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
    </div>
  );
}

export default App;
