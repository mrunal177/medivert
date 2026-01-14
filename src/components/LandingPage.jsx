import { useState } from "react";
import SilentShock from "./SilentShock";
import AuthLogin from "./AuthLogin";
import Navbar from "./Navbar";

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <Navbar onLoginClick={() => setShowLogin(true)} />

            {showLogin && <AuthLogin onClose={() => setShowLogin(false)} />}

            {/* HERO */}
            <section id="home">
                <SilentShock />
            </section>

            {/* PROBLEM */}
            <section id="problem" className="min-h-screen bg-[#F9F7F2] px-10 py-24">
                <h2 className="text-4xl font-bold mb-6">The Problem</h2>
                <p className="max-w-3xl text-lg opacity-80">
                    Improper disposal of unused medicines leads to pharmaceutical pollution,
                    antibiotic resistance, and ecological damage.
                </p>
            </section>

            {/* HOW */}
            <section id="how" className="min-h-screen bg-white px-10 py-24">
                <h2 className="text-4xl font-bold mb-6">How Medivert Works</h2>
                <p className="max-w-3xl text-lg opacity-80">
                    Safe drop-offs, impact tracking, and authorized disposal.
                </p>
            </section>

            {/* IMPACT */}
            <section id="impact" className="min-h-screen bg-[#F9F7F2] px-10 py-24">
                <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            </section>

            {/* DROP-OFF */}
            <section id="dropoff" className="min-h-screen bg-white px-10 py-24">
                <h2 className="text-4xl font-bold mb-6">Drop-Off Locations</h2>
            </section>

            {/* COMMUNITY */}
            <section id="community" className="min-h-screen bg-[#F9F7F2] px-10 py-24">
                <h2 className="text-4xl font-bold mb-6">Community</h2>
            </section>
        </>
    );
};

export default LandingPage;
