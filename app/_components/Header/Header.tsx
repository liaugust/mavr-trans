import { FC } from "react";
import { Button, ButtonVariant } from "../Button";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.2)]">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <a className="" href="#">
            <img src="/logo.svg" alt="Mavt Trans" />
          </a>

          <ul className="flex items-center">
            <li className="px-2 mr-12">
              <a href="#">Home</a>
            </li>
            <li className="px-2 mr-12">
              <a href="#">About us</a>
            </li>
            <li className="px-2 mr-12">
              <a href="#">FAQ</a>
            </li>
            <li className="px-2">
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="buttons">
            <Button variant={ButtonVariant.FilledPrimary} className="mr-2">
              Sign in
            </Button>
            <Button variant={ButtonVariant.OutlinedPrimary}>Sign UP</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
