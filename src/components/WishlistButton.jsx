import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

function WishlistButton({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const isLiked = isInWishlist(product.id);

  const handleToggle = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-white shadow-md hover:scale-110 transition z-10"
      aria-label="Toggle Wishlist"
    >
      <Heart
        size={22}
        className={`transition-colors duration-300 ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
        }`}
      />
    </button>
  );
}

export default WishlistButton;