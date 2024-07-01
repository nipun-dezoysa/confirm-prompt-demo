import "./App.css";
import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { useRef } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";
import { CopyBlock, dracula } from "react-code-blocks";
function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [result, setResult] = useState("");
  const [title, setTitle] = useState("Are you sure?");
  const [description, setDescription] = useState(
    "This action cannot be undone. All values associated with this field will be lost."
  );
  const [confirmLabel, setConfirmLabel] = useState("");
  const [confirmColor, setConfirmColor] = useState("");
  const [confirmTextColor, setConfirmTextColor] = useState("");
  const [cancelLabel, setCancelLabel] = useState("");
  const [cancelColor, setCancelColor] = useState("");
  const [cancelTextColor, setCancelTextColor] = useState("");
  const [hideCancel, setHideCancel] = useState(false);
  const [disableBlur, setDisableBlur] = useState(false);
  const [type, setType] = useState("info" as any);
  const [color, setColor] = useState("");
  const [hoverColor, setHoverColor] = useState("");
  const [hoverTextColor, setHoverTextColor] = useState("");
  const [iconColor, setIconColor] = useState("");
  const [hideBackground, setHideBackground] = useState(false);
  const [hideShadow, setHideShadow] = useState(false);
  const [animation, setAnimation] = useState("scale" as any);

  useAutosizeTextArea(textAreaRef.current, description);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setDescription(val);
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
      <div className="w-full flex justify-evenly gap-3">
        <div className="w-[35%] flex flex-col items-center gap-4">
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
              value={description}
            />
          </div>
          <div className="side-section flex gap-2">
            <div className="w-[50%]">
              <p className="side-title">Type</p>
              <select
                name="type"
                className="side-text"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="info">info (default)</option>
                <option value="warning">warning</option>
                <option value="success">success</option>
                <option value="question">question</option>
              </select>
            </div>
            <div className="w-[50%]">
              <p className="side-title">Animation</p>
              <select
                name="type"
                className="side-text"
                onChange={(e) => setAnimation(e.target.value)}
              >
                <option value="scale">scale (default)</option>
                <option value="fade">fade</option>
                <option value="blur">blur</option>
                <option value="slide-up">slide-up</option>
                <option value="slide-down">slide-down</option>
                <option value="slide-right">slide-right</option>
                <option value="slide-left">slide-left</option>
                <option value="none">none</option>
              </select>
            </div>
          </div>
          <div className="side-section check">
            <input
              className="side-check"
              type="checkbox"
              id="can"
              checked={hideCancel}
              onChange={() => setHideCancel(!hideCancel)}
            />
            <label className="side-lable" htmlFor="can">
              Hide cancel button
            </label>
          </div>
          <div className="side-section check">
            <input
              className="side-check"
              type="checkbox"
              id="blur"
              checked={disableBlur}
              onChange={() => setDisableBlur(!disableBlur)}
            />
            <label className="side-lable" htmlFor="blur">
              Disable background cancellation
            </label>
          </div>
          <div className="side-section check">
            <input
              className="side-check"
              type="checkbox"
              id="background"
              checked={hideBackground}
              onChange={() => setHideBackground(!hideBackground)}
            />
            <label className="side-lable" htmlFor="background">
              Hide the dark background
            </label>
          </div>
          <div className="side-section check">
            <input
              className="side-check"
              type="checkbox"
              id="shadow"
              checked={hideShadow}
              onChange={() => setHideShadow(!hideShadow)}
            />
            <label className="side-lable" htmlFor="shadow">
              Hide the shadow
            </label>
          </div>
        </div>
        <div className="w-[50%] flex flex-col">
          <h1 className=" font-bold text-4xl">{result}</h1>
          <button
            className="gg"
            onClick={() =>
              showConfirm(title, {
                description,
                confirmLabel,
                confirmColor,
                confirmTextColor,
                cancelLabel,
                cancelColor,
                cancelTextColor,
                hideCancel,
                disableBlur,
                type,
                color,
                hoverColor,
                hoverTextColor,
                iconColor,
                hideBackground,
                hideShadow,
                animation,
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
          <CopyBlock
            text={`showConfirm("${title}",\n\t{\n${
              description && `\t\tdescription : "${description}",\n`
            }${hideCancel ? `\t\thideCancel : ${hideCancel},\n` : ""}${
              disableBlur ? `\t\tdisableBlur : ${disableBlur},\n` : ""
            }${
              hideBackground ? `\t\thideBackground : ${hideBackground},\n` : ""
            }${hideShadow ? `\t\thideShadow : ${hideShadow},\n` : ""}\t}\n);`}
            language={"javascript"}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        </div>
      </div>
    </div>
  );
}

export default App;
