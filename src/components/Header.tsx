interface HeaderProps {
  children: string;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="text-center py-4 bg-light">
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
