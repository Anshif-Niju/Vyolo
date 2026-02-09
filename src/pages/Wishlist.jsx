import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/ShopCards';

function Wishlist() {
  const { wishlist } = useWishlist();

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
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <Cards key={item.id} product={item.product} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center min-h-[50vh] w-full lg:col-span-4">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
                No Wishlist Items
              </h1>

              <p className="text-gray-500 text-lg mt-2 max-w-xl">
                You haven’t saved any products yet. Start adding your favorite devices!
              </p>

              <Link
                to="/shop"
                className="mt-6 px-8 py-3 bg-[#1D3557] text-white rounded-full font-bold hover:bg-[#457b9d] transition shadow-lg"
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