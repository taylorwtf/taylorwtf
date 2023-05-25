import { IconDots } from "@tabler/icons-react";
import { FC } from "react";

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="flex flex-col items-start">
      <div
        className={`flex items-center bg-wtf-space-dark text-off-white rounded-2xl px-4 py-2 w-fit`}
        style={{ overflowWrap: "anywhere" }}
      >
        <IconDots className="animate-pulse text-wtf-hot" />
      </div>
    </div>
  );
};
