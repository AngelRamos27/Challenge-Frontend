const TitleLabel = ({ text, size }: { text: string; size: string }) => {
  return (
    <div
      className={`md:w-auto w-full p-2 h-auto items-center font-semibold ${size}`}
    >
      {text}
    </div>
  );
};

export default TitleLabel;
