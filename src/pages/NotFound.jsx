import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1FAEE] px-6 text-center relative overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#457b9d]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#1D3557]/10 rounded-full blur-3xl"></div>

            <h1 className="text-3xl font-black mb-10 text-[#1D3557] tracking-wide">
                VYOLO<span className="text-[#457b9d]">.</span>
            </h1>

            <div className="relative mb-6">
                <div className="text-[10rem] font-black text-[#1D3557]/5 leading-none select-none">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                   
                    
                </div>
            </div>

            <h2 className="text-4xl font-black text-[#1D3557] mb-4 tracking-tight">Oops! Page Not Found</h2>


            <Link
                to="/"
                className="px-10 py-4 bg-[#457b9d] text-white rounded-full font-bold shadow-[0_10px_20px_-10px_rgba(69,123,157,0.5)] hover:bg-[#36607a] hover:shadow-[0_20px_25px_-5px_rgba(69,123,157,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
                Go to Homepage
            </Link>
        </div>
    );
}

export default NotFound;
