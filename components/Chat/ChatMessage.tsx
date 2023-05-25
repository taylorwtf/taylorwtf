import { Message } from "@/types";
import { FC } from "react";

interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  return (
    <div className={`flex flex-col ${message.role === "assistant" ? "items-start" : "items-end"} transition-all duration-200 ease-in-out`}>
      <div
        className={`flex items-center ${message.role === "assistant" ? "bg-#030611 text-#F2F2F2" : "bg-#E21B79 text-#1C1F2A"} rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        {message.content}
      </div>
    </div>
  );
};