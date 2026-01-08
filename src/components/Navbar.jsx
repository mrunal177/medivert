import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "backdrop-blur-md bg-[#071b14]/70" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-green-400 font-bold text-xl">MEDIVERT</h1>
        <div className="space-x-6 text-green-200">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#stats">Impact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
