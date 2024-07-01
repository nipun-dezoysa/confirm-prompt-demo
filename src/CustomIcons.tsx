import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function CustomIcons() {
  return (
    <div className="main-container flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Adding Custom Icons</h1>
      <p>
        You can easily customize your confirm dialogs by adding custom icons.
      </p>
      <p>
        First, visit the{" "}
        <a
          className="text-green-300 hover:underline"
          href="https://react-icons.github.io/react-icons/"
        >
          react-icons official website
        </a>{" "}
        to install in your project. Once installed, import the specific icon you
        want to use.
      </p>
      <p>
        Next, you can add the custom icon to your confirm box by passing it as a
        React Element to the icon parameter.
      </p>
      <CopyBlock
        text={`import { AiFillHeart } from "react-icons/ai";\nimport { showConfirm } from "react-confirm-prompt";\n\nshowConfirm("Are you sure?", { icon: <AiFillHeart /> });`}
        language={"javascript"}
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
}
