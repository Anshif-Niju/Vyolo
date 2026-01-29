// import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F1FAEE] px-6 pt-32 pb-24">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1D3557]">
            Checkout
          </h1>
          <div className="w-24 h-1.5 bg-[#1D3557]/10 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT - SHIPPING FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
              Shipping Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border px-4 py-3 rounded-lg w-full"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border px-4 py-3 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border px-4 py-3 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="City"
                className="border px-4 py-3 rounded-lg w-full"
              />
            </div>

            <textarea
              placeholder="Full Address"
              className="border px-4 py-3 rounded-lg w-full mt-6"
              rows="4"
            ></textarea>

          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
              Order Summary
            </h2>

            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
              <p>Total</p>
              <p className="text-[#457b9d]">₹100000</p>
            </div>

            <button className="w-full mt-6 bg-[#1D3557] hover:bg-[#457b9d] text-white py-3 rounded-xl font-bold transition">
              Place Order
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;
