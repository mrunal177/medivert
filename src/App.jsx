import { useEffect, useState } from "react";
import Learn from "./Learn";


export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="bg-[#f6f3ee] min-h-screen">
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <HeroImpact />
          <ActionSection />
          <Footer />
        </>
      )}

      {page === "learn" && <Learn />}
    </div>
  );
}


/* ---------------- NAVBAR ---------------- */

function Navbar({ setPage }) {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#f9f6f1] shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        🍃 Medivert
      </h1>

      <div className="hidden md:flex gap-10 text-sm">
        <NavLink text="Learn" setPage={setPage} />

        <NavLink text="Find Drop-Offs" />
        <NavLink text="Community" />
        <a href="contribute.html" class="nav-link">
  Contribute
</a>

      </div>
    </nav>
  );
}

function NavLink({ text, setPage }) {

  return (
    <a
      onClick={() => setPage(text.toLowerCase())}

      className="hover:text-[#2f6b55] transition cursor-pointer"
    >
      Learn
    </a>

  );
}

/* ---------------- HERO + IMPACT ---------------- */

function HeroImpact() {
  return (
    <section className="text-center px-6 py-32 animate-fadeIn">
      <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight">
        Unused medicines don’t
        <br />
        <span className="italic">disappear.</span>
      </h1>

      <p className="mt-8 text-lg max-w-2xl mx-auto text-[#6b5a4a]">
        They travel through our water, soil, and ecosystems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
        <ImpactStat value="4,700+" label="Tonnes disposed yearly" />
        <ImpactStat value="70%" label="Reaches water systems" />
        <ImpactStat value="3M" label="Affected ecosystems" />
      </div>
    </section>
  );
}

function ImpactStat({ value, label }) {
  return (
    <div className="animate-float-slow">
      <p className="text-5xl font-serif font-semibold text-[#2f6b55]">
        {value}
      </p>
      <p className="mt-3 text-sm text-[#6b5a4a]">{label}</p>
    </div>
  );
}

/* ---------------- ACTION SECTION ---------------- */

function ActionSection() {
  return (
    <section className="bg-[#f9f6f1] py-32 px-6">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
        You can reduce the harm.
        <br /> Starting today.
      </h2>

      <p className="text-center text-[#6b5a4a] mb-20">
        Small actions create lasting impact. Choose where to begin.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon="📖"
          title="Learn"
          text="Understand the impact of improper medicine disposal"
        />
        <FeatureCard
          icon="📍"
          title="Find Drop-Offs"
          text="Locate safe disposal points near you"
        />
        <FeatureCard
          icon="👥"
          title="Community"
          text="Share experiences and learn from others"
        />
        <FeatureCard
          icon="💚"
          title="Contribute"
          text="Join awareness drives and make a difference"
        />
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <button className="bg-[#2f6b55] text-white px-10 py-4 rounded-full hover:scale-105 hover:bg-[#245745] transition">
          Find Drop-Off Near Me
        </button>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-[#efe9df] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition animate-fadeIn">
      <div className="w-12 h-12 rounded-full bg-[#dce6db] flex items-center justify-center text-xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-3">{title}</h3>
      <p className="text-sm text-[#6b5a4a]">{text}</p>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="text-center py-10 text-sm text-[#6b5a4a]">
      © 2026 Medivert • Protecting Health & Environment
    </footer>
  );
}
