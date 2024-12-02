import React from "react";
import PageLayout from "../Components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="h-screen">
        <h1 className="font-semibold text-center mt-[12vh] mb-10 text-4xl">
          About Us
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-4 lg:mx-8 gap-8">
          <div className="max-w-3xl text-lg text-gray-700 lg:w-1/2 mb-6 lg:mb-0">
            <h1 className="font-semibold text-center lg:text-left text-3xl mb-6">
              Letters Of Compassion
            </h1>
            <p className="mb-4 font-bold">
              Dear Soldiers: Letters of Solitude and Gratitude
            </p>
            <p className="mb-4">
              In the quiet moments of our lives, when we reflect on freedom,
              safety, and peace, we often overlook the heroes who stand guard
              for us — our soldiers. Letters of Solitude is a heartfelt
              initiative to bridge this gap. Through our app, you can pen your
              thoughts, gratitude, and encouragement to the brave Indian
              soldiers who protect our nation, often far from their homes and
              loved ones.
            </p>
            <p className="mb-4">
              Your words have the power to bring warmth to their solitary posts,
              reminding them they are cherished, remembered, and deeply valued.
              A simple letter can be a beacon of hope on a long, cold night.
              Share your emotions, inspire courage, and let them know they are
              never alone in their sacrifice.
            </p>
            <p className="mb-4">
              Write today. Connect through humanity. Make a soldier smile.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400?text=Indian+Soldiers"
              alt="Indian Soldiers"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
