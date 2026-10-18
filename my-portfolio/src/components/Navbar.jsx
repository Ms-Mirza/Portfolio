
function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <a className="logo" href="#home">
        Salah<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${
          theme === "dark" ? "light" : "dark"
        } theme`}
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Navbar;
