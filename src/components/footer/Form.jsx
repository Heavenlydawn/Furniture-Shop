import React from "react";
import sendIcon from "../../images/sendIcon.svg"

const Form = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-black pb-4">Stay Updated</h3>
      <form className="flex gap-1 justify-center">
        <input type="email" placeholder="Enter your email" className="bg-lightBg w-full pt-2.5 pb-2.6 pl-2.7 pr-23" />
        <button className="bg-primary px-2.8 pb-3.1 pt-2.7"><img src={sendIcon} alt="" /></button>
      </form>
    </div>
  );
}

export default Form;