const ResumeCommand = () => {
  const handleOpenResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="pb-2">
      <div className="flex flex-row gap-4">
        <div>portfolio@Siddharth-Chhatbar: ~/programming$</div>
        <div>
          <button onClick={handleOpenResume} className="underline">
            Click here to open my resume in a new tab.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCommand;
