import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import team1 from "../assets/team1.png";
const OurTeam = () => {
  return (
    <>
      <Header></Header>

      <main className="flex lg:py-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 pt-16 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Our
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Team</span>
          </span>
        </h1>
      </main>


      <div className="p-6 lg:px-24  dark:text-gray-100">
        <div className="flex flex-col pt-8 space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={team1}
            alt=""
            className="self-center flex-shrink-0 size-32 lg:size-48 border rounded-xl md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className=" text-lg lg:text-xl font-semibold text-center md:text-left">
              Dr. Shailja Trivedi
            </h4>
            <h4 className="text-lg text-gray-600 mb-2  font-semibold text-center md:text-left">
              Executive Head at Sufal
            </h4>

            <p className="dark:text-gray-400 text-sm line-clamp-6 lg:line-clamp-5">
              <span className="font-bold">About :</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Et ullam deleniti, nulla
              recusandae modi necessitatibus tempora quidem corporis
              reprehenderit distinctio doloremque, reiciendis id a provident,
              aperiam quam. Ut quod hic maxime nulla maiores possimus corporis
              expedita praesentium iure? Repellat accusamus ea voluptatum dolore
              temporibus facilis! Modi nihil nesciunt deleniti veritatis magni,
              ipsa delectus ab culpa, nulla repellendus labore. Harum corrupti
              explicabo itaque, eum quis tempora placeat? Ipsum repellat
              voluptate eius iste laudantium neque architecto modi quas aperiam
              unde odit vero, veritatis eos ipsam aut placeat in error voluptas
              amet natus atque perspiciatis nostrum. Velit illum blanditiis
              exercitationem ad asperiores maiores!
            </p>
            <div className="flex justify-start pt-2 space-x-4 align-center">
              <button
                rel="noopener noreferrer"
                className="py-1 rounded-md bg-pink-600 text-white px-6 text-xs hover:dark:text-violet-400"
              >
                Read ...
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="h-20"></div>
      <Footer></Footer>
    </>
  );
};

export default OurTeam;
