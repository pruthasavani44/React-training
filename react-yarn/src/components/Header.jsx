const Header = (props) => {
  const { title, desc } = props;

  return (
    <header className="bg-gray-200 text-gray-800 py-8 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4"> {title} </h1>
        <p className="text-lg mb-6">{desc}</p>
      </div>
    </header>
  );
};

export default Header;
