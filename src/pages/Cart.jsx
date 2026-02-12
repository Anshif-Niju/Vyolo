import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, totalPrice, delivery } = useCart();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F1FAEE] text-slate-800 px-6 pt-[100px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#457b9d]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

        <h1 className="text-3xl text-center md:text-5xl font-black mb-12 text-[#1D3557] tracking-tight">
          Your <span className="text-[#457b9d]">Cart</span>
        </h1>

        <div className="max-w-7xl  mx-auto grid lg:grid-cols-3">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  id={item.id}
                  item={item.product}
                  size={item.size}
                />
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center text-center min-h-[60vh] w-full lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] tracking-tight">
                No Cart Items
              </h1>

              <p className="text-gray-500 text-lg mt-2 max-w-xl">
                You haven’t added any products yet. Start adding your devices!
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

        {cart.length > 0 ? (
          <div className="items-center min-h-screen">
            <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] h-fit shadow-xl shadow-blue-900/5">
              <h2 className="text-2xl font-black text-[#1D3557] mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-slate-500 font-medium mb-3">
                <span>Subtotal</span>
                <span className="text-slate-800 font-bold">{totalPrice}</span>
              </div>

              <div className="flex justify-between text-slate-500 font-medium mb-6">
                <span>Delivery</span>
                <span className="text-slate-800 font-bold">{delivery}</span>
              </div>

              <div className="flex justify-between text-xl font-black mt-4 pt-4 border-t border-slate-100 text-[#1D3557]">
                <span>Total</span>
                <span className="text-[#457b9d]">{totalPrice + delivery}</span>
              </div>

              <Link
                to="/checkOut"
                className="w-[100px] block m-auto text-center bg-[#457b9d] hover:bg-[#36607a] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                Checkout
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
