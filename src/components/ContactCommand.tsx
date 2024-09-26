const ContactCommand = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("siddharth3901@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="pb-2">
      <div className="flex flex-row gap-4">
        <div>portfolio@Siddharth-Chhatbar: ~/programming$</div>
        Contact Info:
        <a className="underline" onClick={handleCopy}>
          siddharth3901@gmail.com
        </a>
        (click on email address to copy)
      </div>
    </div>
  );
};

export default ContactCommand;
