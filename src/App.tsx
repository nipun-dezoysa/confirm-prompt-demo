import "./App.css";
import { FaGithub, FaNpm } from "react-icons/fa";
import PlayGround from "./PlayGround";
import CustomIcons from "./CustomIcons";
import Intro from "./Intro";
import { CopyBlock, dracula } from "react-code-blocks";
function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[1920px] min-h-screen bg-gray-800 text-blue-200 flex flex-col gap-10">
        <div className="w-full py-4 bg-gray-900 flex justify-center sticky top-0 z-50 opacity">
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

        <Intro />

        <div className="main-container flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Installation</h1>
          <CopyBlock
            text={`npm i react-confirm-prompt`}
            language={""}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        </div>

        <PlayGround />

        <CustomIcons />
      </div>
    </div>
  );
}

export default App;
