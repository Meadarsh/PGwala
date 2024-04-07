import React, { useState } from "react";

const PasswordPrompt = ({ onAuthenticate }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if password is correct
        if (password === "@dminLogin") {
            onAuthenticate(true); // Authenticate user
        } else {
            setError("Incorrect password. Please try again.");
        }
    };

    return (
        <div  className="auth-form flex items-center gap-3 justify-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    type="password"
                    className="mb-5 border-2 border-red-800 rounded-lg p-2"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-1 bg-red-800 lg:hover:bg-red-500">Submit</button>
            </form>
            {error && <p className="text-red-300">{error}</p>}
        </div>
    );
};

export default PasswordPrompt;
