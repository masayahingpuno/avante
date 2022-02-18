import React from "react";
import { questions } from "./api/question";
import { useState } from "react";

export default function Learn({ questionlist }) {
  const [rationale_show, setRationale_show] = useState(false);

  function answerHandler(e) {
    setRationale_show(true);
  }
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scrollbar-hide">
      {questionlist.map((question) => (
        <div key={question.key}>
          {/* TITLE */}
          <div className="container mx-auto mt-8  snap-start border-2 lg:w-1/3">
            <h1 className="pl-6 pt-8 text-left font-mono text-2xl font-bold">
              {question.topic}
            </h1>

            {/* QUESTION */}
            <div className="flex flex-col gap-4">
              <div className="m-4 border-t-2 pt-4">
                <div className="text-lg text-neutral-800 subpixel-antialiased">
                  <p>{question.question}</p>
                </div>
              </div>

              {/* Choices */}
              <div className=" m-4 border-t-2 pt-4">
                <div className="m-4 flex flex-col gap-2">
                  {question.choices.map((choice) => (
                    <div key={question.key}>
                      <div className="rounded-lg border-t-2 bg-neutral-200 hover:bg-main_yellow hover:opacity-75 active:bg-main_yellow active:opacity-100">
                        <button
                          onClick={answerHandler}
                          className="p-2 text-left text-sm font-bold text-neutral-600 hover:text-neutral-800"
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
                <p className="text-lg text-neutral-800 subpixel-antialiased	">
                  {question.rationale}
                </p>
              </div>
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
