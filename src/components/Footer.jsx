function Footer() {
    return (
        <footer className="py-10 bg-[#1D3557] text-center border-t-4 border-[#457b9d]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-slate-400 text-sm font-medium tracking-wide">
                    © 2026 <span className="text-white font-bold text-base">Vectr</span>. 
                    
                    <span className="block sm:inline sm:mx-2 mt-2 sm:mt-0 opacity-50">
                        All rights reserved.
                    </span>
                    
                    <span className="block mt-4 sm:mt-0 sm:inline sm:ml-4">
                        Designed and Developed by 
                        <span className="ml-1 text-[#457b9d] hover:text-white transition-colors cursor-pointer font-bold">
                            Anshif P.
                        </span>
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;