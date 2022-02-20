import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Totop() {
  return (
    // button that when clicked, scrolls to the top of the page
    // position the botton to the bottom right of the page
    <div className="flex justify-end">
      <button onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="m-4 rounded-full border-2 border-gray-900  bg-main_yellow p-2 font-black text-main_red opacity-75 hover:opacity-100 md:p-4"
        />
      </button>
    </div>
  );
}

export default Totop;
