import React from "react";
import LetterCard from "../Reusable Components/LetterCard";
import { letters } from "../utils/constants";
import PageLayout from "../Components/PageLayout";

const Gallery = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-4xl mt-[7vh] mb-6">
        Gallery
      </h1>
      <div className="flex justify-center flex-wrap gap-10">
        {letters.slice(0, 4).map((letter) => (
          <LetterCard key={letter.imageId} letterData={letter} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
