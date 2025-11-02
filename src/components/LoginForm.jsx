import React, { useState } from "react";
import { Link } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // ✅ Validation function
    const validate = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required.";
        else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email.";
        if (!password) newErrors.password = "Password is required.";
        else if (password.length < 8)
            newErrors.password = "Password must be at least 8 characters.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // ✅ If validation passes
        console.log("Login successful ✅");
        alert(`Welcome back, ${email}!`);

        // Clear form
        setEmail("");
        setPassword("");
        setErrors({});
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-orange-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    Welcome Back
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Log in to your account to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-3 rounded-lg border text-gray-700 focus:outline-none ${errors.email ? "border-red-400" : "border-orange-200"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-3 rounded-lg border text-gray-700 focus:outline-none ${errors.password ? "border-red-400" : "border-orange-200"
                                }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
                    >
                        Log In
                    </button>
                </form>

                {/* Links */}
                <div className="text-center mt-6 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-orange-500 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
