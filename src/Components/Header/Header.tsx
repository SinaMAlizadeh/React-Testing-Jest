import React from "react";

type headerProps = {
  title: string;
};

function Header({ title }: headerProps) {
  return (
    <div>
      <h1 className="header">{title}</h1>
    </div>
  );
}
export default Header;
