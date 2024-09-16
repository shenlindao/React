function Message({ header, text }) {
  return (
    <div className="message">
      <h1>
        {header}
      </h1>
      <div>
        {text}
      </div>
    </div>
  );
}

export default Message;
