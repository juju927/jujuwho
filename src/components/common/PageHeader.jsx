const PageHeader = ({ text }) => {
  return (
    <h1 className="text-left md:text-center ml-2 text-3xl font-sans font-bold tracking-wider">
      {text}
    </h1>
  );
};

export default PageHeader;
