const Navbar = ({ onLoginClick }) => {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "problem", label: "Problem" },
    { id: "how", label: "How It Works" },
    { id: "impact", label: "Impact" },
    { id: "dropoff", label: "Drop-Offs" },
    { id: "community", label: "Community" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-[#F5F1E9] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="text-[#3B8650] font-bold text-xl">Medivert</div>

        <ul className="flex space-x-6">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="cursor-pointer text-gray-700 hover:text-[#3B8650]"
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* LOGIN BUTTON */}
        <button
          onClick={onLoginClick}
          className="bg-[#3B8650] text-white px-4 py-2 rounded-full"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
