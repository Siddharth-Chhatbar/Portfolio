import { useCallback, useReducer } from "react";
import GitCommand from "./../components/GitCommand";
import ManCommand from "./../components/ManCommand";
import ContactCommand from "./../components/ContactCommand";
import AboutCommand from "./../components/AboutCommand";
import ClearCommand from "../components/ClearCommand";
import UnknownCommand from "../components/UnknownCommand";
import LinksCommand from "../components/LinksCommand";
import ResumeCommand from "../components/ResumeCommand";

type TerminalCommandState = JSX.Element[];
// type TerminalCommandActionType = 'git' | 'man' | 'contact' | 'about' | 'clear' | 'link' | 'resume';
type GitAction = {
  type: "git";
};
type ManAction = {
  type: "man";
};
type ContactAction = {
  type: "contact";
};
type AboutAction = {
  type: "about";
};
type ClearAction = {
  type: "clear";
};
type LinkAction = {
  type: "link";
};
type ResumeAction = {
  type: "resume";
};
type UnknownAction = {
  type: string;
};

// Union of all actions
type TerminalCommandAction =
  | GitAction
  | ManAction
  | ContactAction
  | AboutAction
  | ClearAction
  | LinkAction
  | ResumeAction
  | UnknownAction;
// type TerminalCommandAction = { type: TerminalCommandActionType };
const reducer = (
  state: TerminalCommandState,
  action: TerminalCommandAction,
) => {
  switch (action.type) {
    case "git":
      return [...state, GitCommand()];
    case "about":
      return [...state, AboutCommand()];
    case "clear":
      return [];
    case "contact":
      return [...state, ContactCommand()];
    case "link":
      return [...state, LinksCommand()];
    case "man":
      return [...state, ManCommand()];
    case "resume":
      return [...state, ResumeCommand()];
    default:
      return [...state, UnknownCommand(action.type)];
  }
};

const EmptyState: JSX.Element[] = [ClearCommand()];
const useTerminalCommands = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const output = state.length === 0 ? EmptyState : state;

  const handleCommand = useCallback(
    (command: string) => {
      console.log('Command Called:', command);
      dispatch({ type: command });
    },
    [dispatch],
  );

  return {
    output,
    handleCommand,
  };
};

export default useTerminalCommands;
