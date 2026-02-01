import { Link } from 'react-router-dom';
import { useForget } from '../hook/useForget';

function Forget() {
  const { formData, handleChange, handleSubmit, error } = useForget();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1FAEE] px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 w-96 h-96 bg-[#457b9d]/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-[#1D3557]/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 relative z-10 border border-slate-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1D3557] tracking-tight">
            Reset Password
          </h2>
          <p className="text-slate-400 mt-2 font-medium">
            Create a new secure password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <label className="block text-sm font-bold text-[#1D3557] mb-2 ml-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#1D3557] font-bold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-[#1D3557] mb-2 ml-1">
              New Password
            </label>
            <input
              name="pass"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              value={formData.pass}
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#1D3557] font-bold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-[#1D3557] mb-2 ml-1">
              Re-enter Password
            </label>
            <input
              name="rePass"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              value={formData.rePass}
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#1D3557] font-bold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#457b9d] focus:border-transparent transition-all duration-300"
            />
          </div>

          {error && (
            <p className="text-center text-xs font-bold text-red-500 bg-red-50 py-2 rounded">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white bg-[#457b9d] hover:bg-[#36607a] hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 mt-4"
          >
            Reset Password
          </button>
        </form>

        <div className="flex flex-col items-center justify-center mt-8 gap-2">
          <p className="text-sm text-slate-500 font-medium">
            Remember your password?
          </p>
          <Link
            to="/login"
            className="text-[#1D3557] font-bold hover:text-[#457b9d] hover:underline transition-all"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forget;
