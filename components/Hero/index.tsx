import React from "react";
const quotes = [
  "A habit needs to be established before it can be expanded upon.",
  "Progress is more important than perfection.",
  "Our choices directly influence our opportunities.",
  "What you dont change you choose.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is the sum of small efforts, repeated day in and day out.",
];
const categories = [
  "Life",
  "Religion",
  "Success",
  "Change",
  "Happinness",
  "Strength",
  "Friendship",
  "Education",
  "Love",
  "Experience",
  "Discipline",
  "Growth",
  "Heartbreak",
  "Humanity",
  "Confidence",
];
export default function Hero() {
  return (
    <div className="flex">
      <div className="hidden lg:flex w-[20%] h-[100vh] pt-[80px] overflow-y-auto">
        <div className=" px-3">
          {categories.map((cat, i) => (
            <div className=" py-3 pl-3 my-1" key={i}>
              <span className=" cursor-pointer text-[20px] text-gray-600">
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col items-center pt-[80px]  h-[100vh] overflow-y-auto bg-gray-900 w-full">
        {quotes.map((quote, i) => (
          <div
            className="flex items-center py-2 px-6 bg-amber-600 my-4 w-[80%] md:w-[500px] min-h-[80px] rounded-3xl text-start text-[18px]"
            key={i}
          >
            {quote}
          </div>
        ))}
      </div>
    </div>
  );
}
