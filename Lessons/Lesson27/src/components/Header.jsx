import { useContext } from "react";
import Menu from "./Menu";
import { LanguageContext, UserContext } from "../contexts/contexts";

export default function Header() {
  const language = useContext(LanguageContext);
  const user = useContext(UserContext);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img src="/logo192.png" alt="Shop logo" className="brand-logo" />
          <span style={{color: "black"}} className="brand-name">SimpleShop ({language})</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/list">Shop</a>
          <a href="/about">About</a>
        </nav>

        <div className="header-actions">
          <form className="search-form" onSubmit={(e) => e.preventDefault()} role="search">
            <input className="search-input" placeholder="Search products..." aria-label="Search products" />
          </form>

          <button className="cart-button" aria-label="Open cart">
            🛒 <span className="cart-count">0</span>
          </button>

          <Menu />
        </div>

      <span style={{color: "black"}}>{user?.value.name}</span>
      <span style={{color: "black"}}>{user?.value.role}</span>

      </div>
    </header>
  )
}