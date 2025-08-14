const PageHeader = ({ text }) => {
  return (
    <h1 className="text-center md:text-center text-black dark:text-indigo-300 ml-2 text-3xl font-sans font-bold tracking-wider">
      {text}
    </h1>
  );
};

export default PageHeader;
