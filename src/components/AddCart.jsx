import toast from 'react-hot-toast';
import api from "../service/api";
import { useUser } from "../context/UserContext";

function AddCart({ product, qty }) {
    const {user} = useUser()


    const addProduct = async () => {
        if (!user) {
            alert("please Login");
        }
        try {
            const res = await api.get(`\Cart?userId=${user.id}&product.id=${product.id}`);
            if (res.data.length > 0) {
                const cartItem = res.data[0];

                await api.patch(`/Cart/${cartItem.id}`, {
                    size: cartItem.size + 1,
                })

                toast.success("Product size added")

            } else {
                await api.post("/Cart", {
                    userId: user.id,
                    product: product,
                    size: qty || 1,
                });
                toast.success("Product added")

            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            onClick={addProduct}
            className="flex-1 bg-[#457b9d] text-white py-2.5 rounded-xl font-bold hover:bg-[#36607a] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 text-sm"
        >
            Add to Cart
        </button>
    );
}

export default AddCart;
