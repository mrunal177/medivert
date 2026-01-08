import { motion } from "framer-motion";
import CountUp from "react-countup";
import bgImage from "../assets/medivert-bg.jpg";

const Landingpage = () => {
    return (
        <div className="relative text-white">
            {/* 🌿 PARALLAX BACKGROUND */}
            <div
                className="fixed inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="fixed inset-0 bg-[#071b14]/85 -z-10" />


            {/* ================= HERO ================= */}
            <section
                id="hero"
                className="h-screen snap-start flex flex-col justify-center items-center text-center px-6"
            >
                <motion.h1
                    className="text-7xl font-extrabold text-green-400"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    MEDIVERT
                </motion.h1>

                <motion.p
                    className="mt-6 text-xl text-green-200 max-w-xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Responsible medicine disposal for a cleaner, healthier planet.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-10 px-10 py-4 bg-green-500 text-black font-semibold rounded-full"
                >
                    Get Started
                </motion.button>
            </section>

            {/* ================= FEATURES ================= */}
            <section
                id="features"
                className="h-screen snap-start flex items-center justify-center px-10"
            >
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
                    {[
                        "Safe Disposal",
                        "Eco Protection",
                        "Community Awareness",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            data-aos="fade-up"
                            className="bg-[#0d2b21]/80 backdrop-blur-md p-8 rounded-2xl border border-green-700"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl text-green-300 mb-3">{item}</h3>
                            <p className="text-green-200">
                                Helping prevent pharmaceutical pollution responsibly.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section
                id="stats"
                className="h-screen snap-start flex flex-col justify-center items-center text-center"
            >
                <h2 className="text-5xl font-bold text-green-400 mb-12">
                    Our Impact
                </h2>

                <div className="grid md:grid-cols-3 gap-16">
                    <div>
                        <p className="text-6xl font-bold text-green-300">
                            <CountUp end={5000} duration={3} />+
                        </p>
                        <p className="text-green-200 mt-2">Medicines Collected</p>
                    </div>

                    <div>
                        <p className="text-6xl font-bold text-green-300">
                            <CountUp end={120} duration={3} />+
                        </p>
                        <p className="text-green-200 mt-2">Collection Drives</p>
                    </div>

                    <div>
                        <p className="text-6xl font-bold text-green-300">
                            <CountUp end={30000} duration={3} />+
                        </p>
                        <p className="text-green-200 mt-2">Lives Impacted</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landingpage;
