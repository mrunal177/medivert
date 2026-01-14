import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthLogin = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            onClose();
            navigate("/dashboard"); // ✅ ONLY THIS LINE CHANGES PAGE
        } catch {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white w-[380px] rounded-2xl p-6 relative">
                <button onClick={onClose} className="absolute top-3 right-4 text-xl">✕</button>

                <h2 className="text-2xl font-bold text-green-700 mb-4">Login</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

                    <button className="w-full bg-green-700 text-white py-2 rounded">
                        Login
                    </button>
                </form>

                <div className="flex justify-between text-sm mt-4 text-green-700">
                    <span>Forgot Password?</span>
                    <span>Signup (Firebase)</span>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;
