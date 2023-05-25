import { Message } from "@/types";
import { FC } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import { ResetChat } from "./ResetChat";

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (message: Message) => void;
  onReset: () => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-10 text-off-white-dark">
        <ResetChat onReset={onReset} />
      </div>

      <div className="flex flex-col rounded-lg p-4 sm:p-6 sm:border border-#474952 bg-#030611 text-#DCDCDC">
        {messages.map((message, index) => (
          <div
            key={index}
            className="my-2 sm:my-3 transition-all duration-200 ease-in-out"
          >
            <ChatMessage message={message} />
          </div>
        ))}

        {loading && (
          <div className="my-2 sm:my-3">
            <ChatLoader />
          </div>
        )}

        <div className="mt-6 sm:mt-10 bottom-[56px] left-0 w-full">
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </>
  );
};