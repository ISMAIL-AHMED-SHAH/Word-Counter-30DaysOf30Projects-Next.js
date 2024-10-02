"use client"; 
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; 
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button"; 

export default function WordCounter() {

  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };


  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

  // JSX return statement rendering the Word Counter UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <Card className="w-full max-w-md p-6 rounded-lg shadow-xl border border-gray-700 transition-all bg-gray-800 hover:border-purple-500 hover:shadow-purple-500/50">
        <CardHeader className="text-center justify-center flex flex-col space-y-2">
        <CardTitle className="text-2xl font-extrabold">
  <span className="text-pink-500">Text</span>{" "}
  <span className="text-purple-500">Analysis</span>
</CardTitle>

          <CardDescription className="text-gray-400">
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none bg-gray-900 text-white placeholder-gray-500 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between text-white">
            <div className="text-sm">
              <span id="word-count">{wordCount}</span> words,{" "}
              <span id="char-count">{charCount}</span> characters
            </div>
            {/* Button to clear the input text */}
            <Button
              onClick={clearText}
              className="bg-pink-600 hover:bg-pink-400 transition-colors focus:ring-2 focus:ring-pink-500"
            >
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
            {/* Footer section */}
            <footer className="mt-4 text-sm text-muted-foreground">
        Created By Ismail Ahmed Shah
      </footer>
    </div>
  );
}
