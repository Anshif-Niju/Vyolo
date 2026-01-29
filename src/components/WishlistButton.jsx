import { useState, useEffect } from "react";
import api from "../service/api";
import { Heart } from "lucide-react";
import { useUser } from "../context/UserContext";


function WishlistButton({ product }) {
    const [liked, setLiked] = useState(false);
    const [wishListId, setWishListId] = useState(null);

    const {user} = useUser()

    useEffect(() => {

        const checkWishlist = async () => {
            if (!user.id || !product.id) return;

            try {
                const res = await api.get(`/wishlist?userId=${user.id}&productId=${product.id}`);
                if (res.data.length > 0) {
                    setLiked(true);
                    setWishListId(res.data[0].id);
                }
            } catch (err) {
                console.error(err);
            }
        };
        checkWishlist();
    }, [user.id, product.id]); 

    const toggleWishlist = async () => {
        if (!user) {
            alert("Please Login");
            return;
        }

        try {
            if (!liked) {
                const res = await api.post("/wishlist", {
                    userId: user.id,
                    productId: product.id,
                    product:product
                });

                setWishListId(res.data.id);
                setLiked(true);
            } else {
                if (wishListId) {
                    await api.delete(`/wishlist/${wishListId}`);
                    setLiked(false);
                    setWishListId(null);
                }
            }
        } catch (err) {
            console.error( err);
        }
    };

    return (
        <button onClick={toggleWishlist} className="p-2 rounded-full bg-white shadow-md hover:scale-110 transition">
            <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
    );
}

export default WishlistButton;
