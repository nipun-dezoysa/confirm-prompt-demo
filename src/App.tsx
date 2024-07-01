import "./App.css";
import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { useRef } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";
import { CopyBlock, dracula } from "react-code-blocks";
import { Number } from "./components";
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
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[1920px] min-h-screen bg-gray-800 text-blue-200 flex flex-col">
        <div className="w-full py-4 bg-gray-900 flex justify-center">
          <div className="main-container flex justify-between items-center">
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
        <div className="main-container flex justify-center gap-5 my-10">
          <div className="w-[40%] flex flex-col items-center gap-4">
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
            <div className="side-section flex gap-2">
              <div className="w-[25%]">
                <p className="side-title">Theme Color</p>
                <Number state={color} setState={setColor} />
              </div>
              <div className="w-[25%]">
                <p className="side-title">Hover Color</p>
                <Number state={hoverColor} setState={setHoverColor} />
              </div>
              <div className="w-[25%]">
                <p className="side-title">Hover Text Color</p>
                <Number state={hoverTextColor} setState={setHoverTextColor} />
              </div>
              <div className="w-[25%]">
                <p className="side-title">Icon Color</p>
                <Number state={iconColor} setState={setIconColor} />
              </div>
            </div>
            <div className="side-section">
              <p className="side-title">Confirm button</p>
              <div className="flex gap-2">
                <div className="w-[50%]">
                  <p className="small-title">Lable text</p>
                  <input
                    type="text"
                    className="side-text"
                    placeholder="lable text"
                    value={confirmLabel}
                    onChange={(e) => setConfirmLabel(e.target.value)}
                  />
                </div>
                <div className="w-[25%]">
                  <p className="small-title">Text Color</p>
                  <Number
                    state={confirmTextColor}
                    setState={setConfirmTextColor}
                  />
                </div>
                <div className="w-[25%]">
                  <p className="small-title">Button Color</p>
                  <Number state={confirmColor} setState={setConfirmColor} />
                </div>
              </div>
            </div>
            {!hideCancel && (
              <div className="side-section">
                <p className="side-title">Cancel button</p>
                <div className="flex gap-2">
                  <div className="w-[50%]">
                    <p className="small-title">Lable text</p>
                    <input
                      type="text"
                      className="side-text"
                      placeholder="lable text"
                      value={cancelLabel}
                      onChange={(e) => setCancelLabel(e.target.value)}
                    />
                  </div>
                  <div className="w-[25%]">
                    <p className="small-title">Text Color</p>
                    <Number
                      state={cancelTextColor}
                      setState={setCancelTextColor}
                    />
                  </div>
                  <div className="w-[25%]">
                    <p className="small-title">Button Color</p>
                    <Number state={cancelColor} setState={setCancelColor} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className=" font-bold text-4xl">{result}</h1>
            <button
              className="gg"
              onClick={() =>
                showConfirm(title, {
                  description,
                  confirmLabel,
                  confirmColor: confirmColor ? "#" + confirmColor : "",
                  confirmTextColor: confirmTextColor
                    ? "#" + confirmTextColor
                    : "",
                  cancelLabel,
                  cancelColor: cancelColor ? "#" + cancelColor : "",
                  cancelTextColor: cancelTextColor ? "#" + cancelTextColor : "",
                  hideCancel,
                  disableBlur,
                  type,
                  color: color ? "#" + color : "",
                  hoverColor: hoverColor ? "#" + hoverColor : "",
                  hoverTextColor: hoverTextColor ? "#" + hoverTextColor : "",
                  iconColor: iconColor ? "#" + iconColor : "",
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
              }${type != "info" ? `\t\ttype : "${type}",\n` : ""}${
                animation != "scale" ? `\t\tanimation : "${animation}",\n` : ""
              }${hideCancel ? `\t\thideCancel : ${hideCancel},\n` : ""}${
                disableBlur ? `\t\tdisableBlur : ${disableBlur},\n` : ""
              }${
                hideBackground
                  ? `\t\thideBackground : ${hideBackground},\n`
                  : ""
              }${hideShadow ? `\t\thideShadow : ${hideShadow},\n` : ""}${
                color ? `\t\tcolor : "#${color}",\n` : ""
              }${hoverColor ? `\t\thoverColor : "#${hoverColor}",\n` : ""}${
                hoverTextColor
                  ? `\t\thoverTextColor : "#${hoverTextColor}",\n`
                  : ""
              }${iconColor ? `\t\ticonColor : "#${iconColor}",\n` : ""}${
                confirmLabel ? `\t\tconfirmLabel : "${confirmLabel}",\n` : ""
              }${
                confirmTextColor
                  ? `\t\tconfirmTextColor : "#${confirmTextColor}",\n`
                  : ""
              }${
                confirmColor ? `\t\tconfirmColor : "#${confirmColor}",\n` : ""
              }${
                !hideCancel && cancelLabel
                  ? `\t\tconfirmLabel : "${cancelLabel}",\n`
                  : ""
              }${
                !hideCancel && cancelTextColor
                  ? `\t\tconfirmTextColor : "#${cancelTextColor}",\n`
                  : ""
              }${
                !hideCancel && cancelColor
                  ? `\t\tconfirmColor : "#${cancelColor}",\n`
                  : ""
              }\t}\n);`}
              language={"javascript"}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Adding Custom Icons</h1>
              <p>
                With React Confirm Promt, you can easily customize your confirm
                dialogs by adding custom icons.
              </p>
              <p>
                First, visit the{" "}
                <a
                  className="text-green-300 hover:underline"
                  href="https://react-icons.github.io/react-icons/"
                >
                  react-icons official website
                </a>{" "}
                to learn how to install and use react-icons in your project.
                Once installed, import the specific icon you want to use.
              </p>
              <p>
                Next, you can add the custom icon to your confirm box by passing
                it as a React Element to the icon parameter.
              </p>
              <CopyBlock
                text={`import { TiInfoOutline } from "react-icons/ti";\nimport { showConfirm } from "react-confirm-prompt";\n\nshowConfirm("Are you sure?", \n\t{\n\t\ticon: <TiInfoOutline />,\n\t}\n).then((answer) => {\n\tif (answer) {\n\t\talert("You clicked yes");\n\t} else {\n\t\talert("You clicked no");\n\t}\n});`}
                language={"javascript"}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
