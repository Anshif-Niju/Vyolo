import { useCart } from '../context/CartContext';

function AddCart({ product, qty }) {
  const { addProduct } = useCart();

  const addProductCart = () => {
    addProduct(product, qty);
  };

  return (
    <button
      onClick={addProductCart}
      className="flex-1 bg-[#457b9d] text-white py-2.5 rounded-xl font-bold hover:bg-[#36607a] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 text-sm"
    >
      Add to Cart
    </button>
  );
}

export default AddCart;
