"use client";
import { useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";
import Chatbot from "./Chatbot";

export function Conversation() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<
    { source: "user" | "ai"; message: string }[]
  >([]);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected");
      setIsChatOpen(true);
    },
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => {
      console.log("Message:", message);
      setMessages((prev) => [...prev, message]);
    },
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      await conversation.startSession({
        agentId: `${process.env.NEXT_PUBLIC_ELEVENLAB_AGENT_ID}`,
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col  items-center gap-4">
      <Chatbot
        startConversation={startConversation}
        stopConversation={stopConversation}
        setIsChatOpen={setIsChatOpen}
        conversation={conversation}
        isChatOpen={isChatOpen}
        messages={messages}
      />
    </div>
  );
}
