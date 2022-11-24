import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div className="flex justify-center my-20">
      <MoonLoader
        color={"#ff6117"}
        loading={true}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
