import { Link } from "react-router-dom";

function HomeCard({ product }) {
    const { id, img, name, smallDes, price } = product;

    return (
        <div
            key={id}
            className={`
                group relative flex flex-col
                rounded-[2rem] bg-white border border-slate-100
                p-5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out
                ${id >= 5 ? "hidden md:flex" : "flex"}
            `}
        >
            <div className="relative w-full h-56 rounded-3xl overflow-hidden bg-slate-50 mb-5">
                <img 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={img} 
                    alt={name}
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-[#1D3557]/0 group-hover:bg-[#1D3557]/10 transition-colors duration-300"></div>
            </div>

            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#1D3557] mb-2 tracking-tight">{name}</h3>
                <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2 leading-relaxed">
                    {smallDes}
                </p>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-2xl font-black text-[#1D3557] tracking-tight">{price}</span>
                    
                    <button className="rounded-full bg-[#457b9d]/10 text-[#457b9d] font-bold px-6 py-2.5 hover:bg-[#457b9d] hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-900/20">
                        <Link to={`/itemDetail/${id}`}>View</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;