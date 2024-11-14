interface HeaderProps {
  children: React.ReactNode;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

const Header = ({ children, onToggleTheme, isDarkMode }: HeaderProps) => {
  return (
    <header className="header text-center py-4">
      <div className="d-flex justify-content-start">
        <button
          className={`btn mt-2 ${isDarkMode ? "btn-light" : "btn-dark"}`}
          onClick={onToggleTheme}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
