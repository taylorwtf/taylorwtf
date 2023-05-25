import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-#474952 py-2 px-2 sm:px-8 items-center justify-between bg-#030611 text-#F2F2F2">
      <div className="font-bold text-3xl flex items-center">
        <button
          className="ml-2 hover:opacity-50 bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.open("https://taylor.wtf", "_blank")}
        >
          TAYLOR.WTF LIVES FOREVER
        </button>
      </div>
      <div className="flex items-center">
        <button className="bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded mr-2">
          <a
            className="mr-2 hover:opacity-50"
            href="https://twitter.com/TAYL0RWTF"
          >
            Twitter
          </a>
        </button>
        <button className="bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded mr-2">
          Button 2
        </button>
        <button className="bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded mr-2">
          Button 3
        </button>
        <button className="bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded mr-2">
          Button 4
        </button>
        <button className="bg-#E21B79 hover:bg-#F57EB6 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};
