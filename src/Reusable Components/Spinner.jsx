import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress size={100} />
    </div>
  );
};

export default Spinner;
