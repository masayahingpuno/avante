import React from "react";
import { questions } from "./api/question";
import { useState } from "react";

export default function Big({ questionlist }) {
  const [rationale_show, setRationale_show] = useState(false);

  // function rationaleFilter() {
  return questions["count"] == questions.rationale[key]
}
  

  function answerHandler(e) {
    setRationale_show(true);
  }
  return (
    <div className="text-main mt-16 h-screen w-screen snap-y snap-mandatory	 overflow-scroll subpixel-antialiased scrollbar-hide">
      {questionlist.map((question, key) => (
        <div key={key}>
          {/* TITLE */}
          <div className="container mx-auto mt-8  snap-start snap-always border-2 lg:w-1/3">
            <h1 className="pl-6 pt-8 text-left font-main text-2xl font-bold">
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
                  {question.choices.map((choice, choices_key) => (
                    <div key={Math.random()}>
                      <div className="rounded-lg border-t-2 bg-neutral-200 hover:bg-main_yellow hover:opacity-75 active:bg-main_yellow active:opacity-100">
                        <button
                          onClick={answerHandler}
                          className="w-full p-2 text-left text-sm font-bold text-neutral-600 hover:text-neutral-800"
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
                {/* return only the rationale for the questions*/}
                <p className="text-lg text-neutral-800">
                  
                  {question.rationale[key]}</p>
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
