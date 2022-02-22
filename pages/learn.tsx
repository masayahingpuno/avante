import React from "react";
import { questions } from "./api/question";
import { useState } from "react";

export default function Learn({ questionlist }) {
  const [rationale_show, setRationale_show] = useState(false);

  function answerHandler(e) {
    setRationale_show(true);
  }

  return (
    <div className="static mt-4 h-screen w-screen snap-y snap-mandatory overflow-scroll font-main subpixel-antialiased scrollbar-hide">
      {questionlist.map((question, key) => (
        <div
          className="container relative mx-auto snap-start snap-always border-2  md:h-screen md:w-1/3 "
          key={key}
        >
          {/* TITLE */}
          <div className="pt-6">
            <h1 className="pl-6  text-left text-2xl font-bold text-gray-900">
              {question.topic}
            </h1>
          </div>
          {/* QUESTION */}
          <div className="flex flex-col gap-4">
            <div className="m-4 border-t-2 pt-4">
              <div className="text-lg text-gray-800 subpixel-antialiased">
                <p>{question.question}</p>
              </div>
            </div>

            {/* Choices */}
            <div className=" m-4 border-t-2 pt-4">
              <div className="m-4 flex flex-col gap-2">
                {question.choices.map((choice) => (
                  <div key={Math.random()}>
                    <div className="rounded-lg border-t-2  ">
                      <button
                        onClick={answerHandler}
                        className="w-full rounded-xl border-2 border-gray-900 p-2 text-left text-sm font-bold text-gray-800 hover:bg-gray-400 "
                      >
                        <p>{choice}</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rationale*/}
            <div
              className={`m-4 border-t-2 pt-4 ${
                rationale_show ? "visible" : "hidden"
              }`}
            >
              <p className="text-lg text-neutral-800">
                {/* // Filter the rationale with the current key */}
                {question.rationale}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      questionlist: questions,
    },
  };
};
