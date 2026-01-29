import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHomeProduct } from "../service/authService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";
import HomeCard from "../components/HomeCard";
import video from "../assets/video/Video.mp4";

function Home() {
    const [product, setProduct] = useState([]);
    const [hoveredSide, setHoveredSide] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getHomeProduct("limit=6");
            setProduct(res);
        };
        fetchProducts();
    }, []);

    const getLeftWidth = () => {
        if (hoveredSide === "left") return "md:w-[75%]";
        if (hoveredSide === "right") return "md:w-[25%]";
        return "md:w-[50%]";
    };

    const getRightWidth = () => {
        if (hoveredSide === "right") return "md:w-[75%]";
        if (hoveredSide === "left") return "md:w-[25%]";
        return "md:w-[50%]";
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#F1FAEE] text-slate-800 font-sans overflow-hidden selection:bg-[#457b9d] selection:text-white">
                {/* HERO SECTION */}
                <section className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-[#457b9d]/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A8DADC]/40 rounded-full blur-3xl -z-10"></div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-fadeIn">
                            <h1 className="text-6xl md:text-6xl font-black leading-tight tracking-tight text-[#1D3557]">
                                Dominate the Future of Gaming
                                <span className="block md:text-5xl text-[#457b9d]">Power. Performance. Precision.</span>
                            </h1>
                            <p className="text-slate-600 text-xl font-medium max-w-lg leading-relaxed">
                                Discover next-gen gaming laptops built for ultra FPS, RTX graphics, and esports performance.
                                Buy premium rigs or explore powerful setups built for serious gamers.
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <button className="group relative px-8 py-4 rounded-full bg-[#457b9d] text-white font-bold shadow-[0_10px_20px_-10px_rgba(69,123,157,0.5)] hover:shadow-[0_20px_25px_-5px_rgba(69,123,157,0.4)] hover:-translate-y-1 transition-all duration-300">
                                    <Link to="/shop" className="flex items-center gap-2">
                                        Shop Now
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#457b9d] blur-[60px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>

                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="relative rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 ease-out animate-float border-4 border-white w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <div className="relative w-full h-[600px] md:h-[700px] flex flex-col md:flex-row bg-[#0f172a]">
                    {/* LEFT SIDE - BUY (Cyan Theme) */}
                    <div
                        className={`relative h-1/2 md:h-full transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer border-b-4 md:border-b-0 md:border-r-4 border-cyan-500 ${getLeftWidth()} w-full`}
                        onMouseEnter={() => setHoveredSide("left")}
                        onMouseLeave={() => setHoveredSide(null)}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')",
                            }}
                        ></div>
                        {/* Overlay: Dark Blue/Black */}
                        <div className="absolute inset-0 bg-[#020617]/80 group-hover:bg-[#020617]/40 transition-colors duration-500"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white z-10 whitespace-nowrap">
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-cyan-50 text-shadow-glow">
                                Buy Gear
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-cyan-200 opacity-80 max-w-md whitespace-normal mb-8">
                                Own the ultimate battlestation.
                            </p>
                            {/* Button: Cyan Border */}
                            <Link
                                to="/shop"
                                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE - RENT (Purple Theme) */}
                    <div
                        className={`relative h-1/2 md:h-full transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer ${getRightWidth()} w-full`}
                        onMouseEnter={() => setHoveredSide("right")}
                        onMouseLeave={() => setHoveredSide(null)}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1531297425971-ec8ca8bc7c29?q=80&w=2070&auto=format&fit=crop')",
                            }}
                        ></div>
                        {/* Overlay: Deep Purple/Black */}
                        <div className="absolute inset-0 bg-[#2e1065]/90 group-hover:bg-[#2e1065]/50 transition-colors duration-500"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white z-10 whitespace-nowrap">
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-fuchsia-50">
                                Explore
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-fuchsia-200 opacity-80 max-w-md whitespace-normal mb-8">
                                Enter the game world
                            </p>
                            {/* Button: Purple Border */}
                            <Link
                                to="/cart"
                                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all"
                            >
                                Go to cart
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="py-10 border-y border-[#457b9d]/20 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                        {["Buy New Devices", "Explore Gaming", "Fast Delivery", "Secure Payments"].map((item) => (
                            <div
                                key={item}
                                className="group p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="h-2 w-2 bg-[#457b9d] rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <p className="font-bold text-[#1D3557]">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRODUCT SECTION */}
                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-[#457b9d] font-bold tracking-widest uppercase text-sm mb-2">
                            New Arrivals
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1D3557]">Trending Electronics</h2>
                        <div className="w-24 h-1.5 bg-[#457b9d] mt-6 rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {product.map((product) => (
                            <HomeCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <section className="relative py-32 mx-6 rounded-[3rem] overflow-hidden my-12">
                    <div className="absolute inset-0 bg-[#1D3557]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#457b9d] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Explore Your Favs</h2>
                        <p className="text-[#A8DADC] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                            Buy your Machine. Upgrade anytime. The smartest way to own tech.
                        </p>
                        <Link to="/wishlist" className="px-10 py-5 bg-[#457b9d] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#36607a] hover:scale-105 transition-all duration-300">
                            Explore Whilist
                        </Link>
                    </div>
                </section>

                {/* ANIMATION STYLES */}
                <style>{`
                    .animate-fadeIn {
                        animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(40px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>

                <Feedback />
                <Footer />
            </div>
        </>
    );
}

export default Home;
