import {useState} from "react"

function CartCard({item,size}) {

   const [qtys,setQty]=useState(0)
   const [msg,setMsg]=useState("")
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-6 bg-white border border-slate-200 p-4 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <img
                    src={item.img}
                    className="w-32 h-32 rounded-3xl object-cover bg-slate-100"
                    loading="lazy"
                />

                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-xl font-bold text-[#1D3557]">{item.name}</h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">{item.smallDes}</p>

                    <div className="flex items-center gap-6 mt-4">
                        <span className="text-[#457b9d] font-black text-xl">{item.price}</span>

                        <div className="flex items-center gap-3 bg-slate-50 px-2 py-1 rounded-xl border border-slate-100">
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-[#1D3557] font-bold transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (qtys == 0) {
                                        setMsg("Minimum size reached");
                                        return;
                                    }
                                    setMsg("");
                                    setQty((prev) => prev - 1);
                                }}
                            >
                                -
                            </button>
                            <span className="font-bold text-[#1D3557] min-w-[20px] text-center">{size}</span>
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-[#1D3557] font-bold transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (qtys == 10) {
                                        setMsg("Maximum size reached");
                                        return;
                                    }
                                    setMsg("");
                                    setQty((prev) => prev + 1);
                                }}
                            >
                                +
                            </button>
                            {
                                msg&&<p className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded ml-auto">{msg}</p>
                            }
                        </div>
                    </div>
                </div>
                <button className="self-start text-slate-300 hover:text-red-500 p-2 transition-colors">✕</button>
            </div>

            <div className="h-px bg-slate-200 my-4"></div>
        </div>
    );
}

export default CartCard
