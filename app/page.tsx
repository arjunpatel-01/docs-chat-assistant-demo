"use client";
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { pageReadmeMap } from "@/utils";
import remarkGfm from "remark-gfm";
import { Box } from '@mui/material';
import { OpenAIAssistant } from 'docs-chat-assistant';

export default function Home() {
  return (
    <>
      <OpenAIAssistant 
          title="Docs Chat Assistant"
          apiRoute='/api/assistant/v1/stream'
          color="purple"
          placeholder="Hey! I'm an AI assistant to help you get familiar with Docs Chat Assistant."
          formLabel='Ask me a question about Docs Chat Assistant...'
        />
      <Box padding={10} margin={0} sx={{fontSize: "1.5rem", 'a: -webkit-any-link': {color: "rgb(217,225,233)"}}}>
        {pageReadmeMap.map((m, index) => (
          <div key={index}>
            <Markdown 
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                      <SyntaxHighlighter
                          children={String(children).replace(/\n$/, '')}
                          style={atomDark}
                          language={match[1]} 
                          PreTag="div"
                          wrapLines={true}
                          wrapLongLines={true}
                      />
                  ) : (
                      <code 
                          style={{
                              backgroundColor: "rgba(52,57,66,255)", 
                              color: "rgba(230,237,243,255)", 
                              padding: "0.125rem calc(0.3125rem)", 
                              borderRadius: "0.25rem",
                              border: ".1rem solid #0000001a"
                          }}
                          {...props}
                      >
                          {children}
                      </code>
                  )
                }
              }}
            >
              {m}
            </Markdown>
          </div>
        ))}
      </Box>
    </>
  );
}
