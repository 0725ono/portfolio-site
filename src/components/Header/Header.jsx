import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="topContainer flex header-height">
        <div className="logo">
          <h3>
            <Link href="/" className="title-logo">
              MA.ONO
            </Link>
          </h3>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>

            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
