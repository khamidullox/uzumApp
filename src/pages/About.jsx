import React from "react";
import { useSelector } from "react-redux";

function About() {
  let { user } = useSelector((store) => store.user);
  return (
    <div className=" max-w-w-3/4  h-full flex items-start justify-start mt-10 ">
      <div className=" text-start w-full flex">
        <h2 className="text-xl font-medium tracking-widest">
          {user.displayName}
        </h2>
      </div>
    </div>
  );
}

export default About;
