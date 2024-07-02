"use client";
import { Member } from "@prisma/client";
import { FC } from "react";
import ChatWelcome from "./ChatWelcome";

interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
  type: "channel" | "conversation";
}

const ChatMessages: FC<ChatMessagesProps> = ({
  name,
  member,
  chatId,
  apiUrl,
  socketQuery,
  socketUrl,
  paramKey,
  paramValue,
  type,
}) => {
  return (
    <div className="flex-1 flex flex-col py-4 overflow-y-auto">
          <div className="flex-1">
              <ChatWelcome type={type} name={name} />
      </div>
    </div>
  );
};

export default ChatMessages;
