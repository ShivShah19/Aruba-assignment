import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function SignupPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");
    const [errors, setErrors] = useState({});

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check password strength
    function checkStrength(pw) {
        if (!pw) return "";
        let score = 0;
        if (pw.length >= 8) score++;
        if (/[A-Z]/.test(pw)) score++;
        if (/[0-9]/.test(pw)) score++;
        if (/[^A-Za-z0-9]/.test(pw)) score++;

        if (score <= 1) return "Weak";
        if (score === 2) return "Medium";
        if (score >= 3) return "Strong";
    }

    // handle password 
    function handlePasswordChange(e) {
        const pw = e.target.value;
        setPassword(pw);
        setStrength(checkStrength(pw));
    }

    // change colour on the basis of strength 
    function getStrengthColor() {
        if (strength === "Weak") return "text-red-500";
        if (strength === "Medium") return "text-yellow-500";
        if (strength === "Strong") return "text-green-600";
        return "text-gray-400";
    }

    // field validation 
    function validate() {
        const e = {};
        if (!firstName) e.firstName = "First name is required.";
        if (!lastName) e.lastName = "Last name is required.";
        if (!email) e.email = "Email is required.";
        else if (!emailRegex.test(email)) e.email = "Enter a valid email.";
        if (!password) e.password = "Password is required.";
        else if (password.length < 8)
            e.password = "Password must be at least 8 characters.";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    // handle submit 
    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;

        // welcome message
        alert(`Welcome ${firstName}!`);
        console.log({ firstName, lastName, email, password });

        // Clear all input fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setErrors({});
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white flex flex-col md:flex-row items-center justify-center px-6 py-12">
            <div className="md:w-1/2 mb-12 md:mb-0 text-left md:text-left space-y-6">
                <img
                    src={logo}
                    alt="Aruba Networks"
                    className="h-10 mx-auto md:mx-0 mb-4"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                    Join <span className="text-orange-500">Aruba Network</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                    Create your account to access Aruba’s cloud networking solutions. platform, collaborate, and
                    manage networks seamlessly.
                </p>

                <ul className="text-gray-700 mt-4 space-y-3">
                    <li className="flex items-center gap-3">
                        <span className="text-orange-500 text-xl">⚡</span>
                        <span>Seamless cloud connectivity</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-orange-500 text-xl">🔒</span>
                        <span>Enterprise-grade security</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-orange-500 text-xl">🌍</span>
                        <span>Global network visibility</span>
                    </li>
                </ul>
            </div>

            <div className="md:w-[420px] w-full bg-white/90 backdrop-blur-xl shadow-2xl border border-orange-100 rounded-3xl p-8">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-1">
                        Create Account
                    </h2>
                    <p className="text-gray-600">Start your journey with Aruba today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        />
                        {errors.firstName && (
                            <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        />
                        {errors.lastName && (
                            <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        />
                        {strength && (
                            <p className={`text-sm font-medium mt-1 ${getStrengthColor()}`}>
                                Password strength: {strength}
                            </p>
                        )}
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white rounded-xl py-3 font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                    >
                        Sign up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-600 font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </main>
    );
}
