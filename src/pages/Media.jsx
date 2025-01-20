import React from "react";
import LetterCard from "../Reusable Components/LetterCard";
import { letters } from "../utils/constants";
import PageLayout from "../Components/PageLayout";

const Media = () => {
  return (
    <PageLayout>
      <h1 className="font-semibold text-center mt-[12vh] mb-6 text-4xl">
        Media Gallery
      </h1>
      <div className="flex justify-center flex-wrap gap-10 mb-[9vh]">
        {letters.map((letter) => (
          <LetterCard key={letter.imageId} letterData={letter} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Media;
