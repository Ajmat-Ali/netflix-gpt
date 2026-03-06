const GptBody = () => {
  const key = import.meta.env.OPENAI_KEY;
  console.log(key);
  return <div className="text-white p-20 bg-red-500/90">GptBody</div>;
};

export default GptBody;
