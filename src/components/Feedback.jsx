import { useState, useEffect } from "react";
import api from "../service/api";

function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [message, setMessage] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!emailRegex.test(formData.email)) {
            formData.email = "";
            setMessage("Invalid email");
            return;
        }

        await api.post("/Feedback", formData);
        formData.name = "";
        formData.email = "";
        formData.message = "";
        setMessage("Your Valuable Feedback Added,Thank you");
    };

    return (
        <section id="feedback" className="w-full flex justify-center items-center py-24 bg-[#F1FAEE]">
            <div className="w-full max-w-2xl mx-4 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-blue-900/5 p-10 relative overflow-hidden">
                
                {/* Decorative blob for aesthetic */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#457b9d]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <h2 className="text-4xl font-black text-[#1D3557] text-center tracking-tight">We Value Your Feedback</h2>

                <p className="text-slate-500 text-center mt-3 font-medium">Help us improve Vectr Tech experience</p>

                {message && (
                    <p className={`${message === "Invalid email" ? "text-red-500 bg-red-50" : "text-emerald-600 bg-emerald-50"} text-center mt-6 font-bold py-3 rounded-xl border border-transparent`}>
                        {message}
                    </p>
                )}

                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-[#1D3557] mb-2 uppercase tracking-wide">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#1D3557] mb-2 uppercase tracking-wide">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#1D3557] mb-2 uppercase tracking-wide">Your Feedback</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your thoughts with us..."
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all resize-none font-medium"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-bold text-white bg-[#457b9d] hover:bg-[#36607a] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(69,123,157,0.5)] hover:shadow-[0_20px_25px_-5px_rgba(69,123,157,0.4)] hover:-translate-y-1"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Feedback;