import React from "react";

const Header = (props) => {
  const { title } = props;
  return (
    <header className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to {title}</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a brief description {title} the purpose of this application
          and what you can do here.
        </p>
      </div>
    </header>
  );
};

export default Header;
