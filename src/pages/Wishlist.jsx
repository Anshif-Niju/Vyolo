import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserProduct } from "../service/authService";
import { useUser } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Wishlist() {
    const [userPro, setUserPro] = useState([]);
    const {user} = useUser();

    console.log(userPro);
    useEffect(() => {
        const getWishlist = async () => {
            try {
                const res = await getUserProduct(`${user.id}`);
                setUserPro(res);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getWishlist();
    }, [user.id]);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#F1FAEE] px-6 pt-28 pb-10">
                <div className="text-center mb-4">
                    <span className="text-[#457b9d] font-bold tracking-widest uppercase text-xs mb-1 block">
                        Saved Items
                    </span>

                    <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] tracking-tight">
                        Your <span className="text-[#457b9d]">Wishlist</span>
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {userPro.length > 0 ? (
                        userPro.map((item) => <Cards key={item.id} product={item.product} />)
                    ) : (
                        <div className="flex flex-col items-center text-center mt-[100px]">
                            <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] tracking-tight">
                                No Wishlist Items
                            </h1>

                            <p className="text-gray-500 text-lg mt-2 max-w-xl">
                                You haven’t saved any products yet. Start adding your favorite devices!
                            </p>

                            <Link
                                to="/shop"
                                className="mt-4 px-8 py-3 bg-[#1D3557] text-white rounded-full font-bold hover:bg-[#457b9d] transition"
                            >
                                Browse Products
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Wishlist;
