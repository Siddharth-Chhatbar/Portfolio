import React, { useState, useEffect, useRef } from "react";
import useTerminalCommands from "./../hooks/useTerminalCommands";

const ProgrammingPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { output, handleCommand } = useTerminalCommands();
  const outputRef = useRef<HTMLDivElement>(null); // Ref for the output container
  let initial: boolean = false;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  const renderAbout = () => {
    if (!initial) {
      handleCommand("about");
    }
    initial = true;
  };

  useEffect(() => {
    renderAbout();
  }, []);

  // Scroll to the bottom of the output when new content is rendered
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="bg-primary h-screen w-screen flex items-center justify-center">
      <div className="bg-secondary h-[95%] w-[97%] rounded-lg p-4 drop-shadow-xl gap-4 flex flex-col justify-center">
        <div
          className="w-full h-full bg-secondary text-white border-4 border-primary rounded outline-none p-2 font-jetBrainsMono text-xl font-semibold overflow-y-scroll"
          ref={outputRef} // Reference the output container for auto-scrolling
        >
          {output.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="relative w-full">
          <span className="absolute pl-1 left-2 top-1/2 transform -translate-y-1/2 font-jetBrainsMono text-white text-2xl font-bold">
            {">"}
          </span>
          <input
            type="text"
            name="commands"
            className="w-full h-12 pl-8 bg-secondary text-white border-4 border-primary rounded outline-none p-2 font-jetBrainsMono text-xl font-semibold"
            autoFocus={true}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type man for help..."
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingPage;
