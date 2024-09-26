import { useState } from "react";
import GitCommand from "./../components/GitCommand";
import ManCommand from "./../components/ManCommand";
import ContactCommand from "./../components/ContactCommand";
import AboutCommand from "./../components/AboutCommand";
import ClearCommand from "../components/ClearCommand";
import UnknownCommand from "../components/UnknownCommand";
import LinksCommand from "../components/LinksCommand";
import ResumeCommand from "../components/ResumeCommand";

const useTerminalCommands = () => {
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [isCleared, setIsCleared] = useState(false); // Track if the screen is cleared

  const handleCommand = (command: string) => {
    const [cmd] = command.trim().split(" ");

    switch (cmd.toLowerCase()) {
      case "git":
        if (!isCleared) {
          setOutput((prev) => [...prev, GitCommand()]);
        } else {
          setOutput([GitCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;
      case "man":
        if (!isCleared) {
          setOutput((prev) => [...prev, ManCommand()]);
        } else {
          setOutput([ManCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;
      case "contact":
        if (!isCleared) {
          setOutput((prev) => [...prev, ContactCommand()]);
        } else {
          setOutput([ContactCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;
      case "about":
        if (!isCleared) {
          setOutput((prev) => [...prev, AboutCommand()]);
        } else {
          setOutput([AboutCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;
      case "resume":
        if (!isCleared) {
          setOutput((prev) => [...prev, ResumeCommand()]);
        } else {
          setOutput([ResumeCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;

      case "link":
        if (!isCleared) {
          setOutput((prev) => [...prev, LinksCommand()]);
        } else {
          setOutput([LinksCommand()]);
          setIsCleared(false); // Reset cleared state
        }
        break;
      case "clear":
        setOutput([ClearCommand()]);
        setIsCleared(true); // Mark as cleared
        break;
      default:
        if (!isCleared) {
          setOutput((prev) => [...prev, UnknownCommand(cmd)]);
        } else {
          setOutput([UnknownCommand(cmd)]);
          setIsCleared(false); // Reset cleared state
        }
    }
  };

  return { output, handleCommand };
};

export default useTerminalCommands;
