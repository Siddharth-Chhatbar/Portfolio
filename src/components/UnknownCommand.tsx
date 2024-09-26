const UnknownCommand = (command: string) => {
  return (
    <div className="pb-2">
      <div className="flex flex-row gap-4">
        <div>portfolio@Siddharth-Chhatbar: ~/programming$</div>
        <div>Command {command} does not exist</div>
      </div>
    </div>
  );
};

export default UnknownCommand;
