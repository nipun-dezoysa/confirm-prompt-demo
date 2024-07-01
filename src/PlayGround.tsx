import { showConfirm } from "react-confirm-prompt";
import { useState } from "react";
import { Number } from "./components";
import { useRef } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";
import { CopyBlock, dracula } from "react-code-blocks";

export default function PlayGround() {
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
    <div className="main-container flex flex-col gap-3">
      <div>
        <h1 className="text-2xl font-semibold">The Playground</h1>
        <p>
          Explore the React Confirm Promt Playground! Easily customize your
          confirm dialogs and get the code snippets you need using our intuitive
          UI. Experiment with different options and see the results in
          real-time.
        </p>
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-[50%] flex flex-col items-center gap-4">
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
              hideBackground ? `\t\thideBackground : ${hideBackground},\n` : ""
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
            }${confirmColor ? `\t\tconfirmColor : "#${confirmColor}",\n` : ""}${
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
        </div>
      </div>
    </div>
  );
}
