import { useState, useEffect } from 'react';
import api from '../service/api';
import ProductCard from '../components/ShopCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Shop() {
  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [selectCategory, setSelectCategory] = useState('all');

  useEffect(() => {
    const fetchProduct = async () => {
      let url = '/products?isActive=true';
      if (selectCategory !== 'all') {
        url = `/products?isActive=true&category=${selectCategory}`;
      }
      const res = await api.get(url);
      setProduct(res.data);
      setOriginalProduct(res.data);
    };

    fetchProduct();
  }, [selectCategory]);


  const sortMinToMax=()=>{
    const sorted=[...product].sort((a,b)=>Number(a.price)-Number(b.price))
    setProduct(sorted)
  }
  const sortMaxToMin=()=>{
    const sorted=[...product].sort((a,b)=>Number(b.price)-Number(a.price))
    setProduct(sorted)
  }

  const sortDefault=()=>{
    setProduct(originalProduct)
  }

  const filterProduct = product.filter((item) => {
    return item.name.toLowerCase().startsWith(search.toLowerCase());
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F1FAEE] px-6 pt-32 pb-24">
        <div className="text-center mb-12">
          <span className="text-[#457b9d] font-bold tracking-widest uppercase text-xs mb-3 block">
            Premium Gear
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] tracking-tight">
            Shop <span className="text-[#457b9d]">Devices</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#1D3557]/10 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between my-6 gap-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 px-4 py-2 border rounded-lg shadow"
          />


<div className="relative inline-bloc">
  <select 
    onChange={(e) => {
      if (e.target.value === "low") sortMinToMax();
      if (e.target.value === "high") sortMaxToMin();
      if (e.target.value === "default") sortDefault();
    }}
    className="bg-white rounded-lg shadow px-3 text-black text-sm rounded-xl border border-blackpx-4 py-2.5 outline-none focus:ring-2 focus:ring-black appearance-none cursor-pointer hover:bg-slate-750 transition-all min-w-[160px]"
  >
    <option value="default"  selected>Default Sort</option>
    <option value="low">Low to High </option>
    <option value="high">High to Low ↓</option>
  </select>
  
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>

  </div>
</div>


          <div className="flex flex-wrap gap-3">
            {['All', 'Acer', 'Dell', 'Lenovo', 'Asus'].map((item, index) => {
              const isSelected = selectCategory === item.toLowerCase();
              return (
                <button
                  key={index}
                  onClick={() => setSelectCategory(item.toLowerCase())}
                  className={`
            px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border
            ${
              isSelected
                ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-lg shadow-blue-900/20 scale-105'
                : 'bg-white text-slate-500 border-slate-200 hover:border-[#457b9d] hover:text-[#457b9d] hover:-translate-y-0.5'
            }
          `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filterProduct.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
