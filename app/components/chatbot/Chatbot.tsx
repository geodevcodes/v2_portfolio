"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDownCircleIcon,
  Loader2,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface ChatbotProps {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  messages: { source: "user" | "ai"; message: string }[];
  conversation: any;
  startConversation: any;
  stopConversation: any;
}

export default function Chatbot({
  startConversation,
  stopConversation,
  setIsChatOpen,
  conversation,
  isChatOpen,
  messages,
}: ChatbotProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    startConversation()
    if (conversation.status !== "connected") return;
    setIsChatOpen(!isChatOpen);
  };
  const closeChat = () => {
    if (conversation.status === "connected") {
      stopConversation(); // properly ends the conversation
    }
    setIsChatOpen(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const MarkdownComponents = {
    code: ({ inline, children, ...props }: CodeProps) =>
      inline ? (
        <code {...props} className="bg-gray-200 px-1 rounded">
          {children}
        </code>
      ) : (
        <pre {...props} className="bg-gray-200 p-2 rounded">
          <code>{children}</code>
        </pre>
      ),
    ul: ({ children }: any) => <ul className="list-disc ml-4">{children}</ul>,
    ol: ({ children }: any) => (
      <ol className="list-decimal ml-4">{children}</ol>
    ),
  };

  return (
    <div className="bg-green-400 text-black">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-16 right-4 z-50"
        >
          <Button
            onClick={toggleChat}
            className="rounded-full size-14 p-2 shadow-lg"
          >
            {!isChatOpen ? (
              <MessageCircle className="size-12" />
            ) : (
              <ArrowDownCircleIcon />
            )}
          </Button>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px]"
          >
            <Card className="border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-bold">Ask AI</CardTitle>
                <Button
                  onClick={closeChat}
                  size="sm"
                  variant="ghost"
                  className="px-2 py-0"
                >
                  <X className="size-4" />
                  <span className="sr-only">Close Chat</span>
                </Button>
              </CardHeader>

              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {messages.length === 0 && (
                    <p className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                      No message Yet.
                    </p>
                  )}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.source === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block p-4 rounded-lg ${
                          message.source === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={MarkdownComponents}
                        >
                          {message.message}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  <div ref={scrollRef}></div>
                </ScrollArea>
              </CardContent>

              <CardFooter>
                <Input
                  type="text"
                  placeholder="Speak to AI to continue..."
                  disabled
                  className="w-full"
                />
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
