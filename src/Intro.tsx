import React from 'react';
import { showConfirm } from "react-confirm-prompt";

export default function Intro() {
  return (
    <div className="main-container">
      <h1 className="text-3xl font-bold mb-2">React Confirm Prompt</h1>
      <div className="flex max-lg:flex-col gap-5">
        <div className="w-[50%] max-lg:w-full break-normal">
          ReactConfirmPrompt is a versatile and user-friendly React component
          designed to create confirm dialogs with ease. It is fully responsive,
          highly customizable, and simple to integrate into your React
          applications. Whether you need to confirm user actions, prompt for
          decisions, or display alerts, ReactConfirmBox provides a seamless
          solution to enhance user interactions.
        </div>
        <div className="w-[50%] max-lg:w-full flex max-md:flex-col items-center justify-center gap-4">
          <button
            onClick={() => confirm("Press a button!\nEither OK or Cancel.")}
            className="gg"
          >
            Defualt Confirm
          </button>
          <div className='text-lg font-semibold'>VS</div>
          <button
            onClick={() =>
              showConfirm("Hi! I am a confirm dialog.", {
                description:
                  "Elevate your application's UX with ReactConfirmPrompt",
                type: "success",
              })
            }
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:border-[#646cff]"
          >
            React Confirm Promt
          </button>
        </div>
      </div>
    </div>
  );
}
