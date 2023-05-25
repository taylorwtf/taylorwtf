import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-sm sm:text-base text-#E21B79 font-semibold rounded-lg px-4 py-2 bg-#030611 hover:bg-#474952 focus:outline-none focus:ring-1 focus:ring-#474952 transition-all duration-200 ease-in-out"
        onClick={() => onReset()}
      >
        Reset
      </button>
    </div>
  );
};