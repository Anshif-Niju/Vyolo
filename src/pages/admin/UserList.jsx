import { useState, useEffect } from 'react';
import { useStats } from '../../context/StatsContext';
import SideBar from './SideBar'

function UserList() {
  const { stats, toggleActive } = useStats();
  const [search, setSearch] = useState('');


  const filterSearch = stats.users.filter((user) =>
    user.name.toLowerCase().startsWith(search.toLowerCase()),
  );

  return (
    <>
    <div className="min-h-screen bg-slate-900 text-slate-200 flex relative">
    <SideBar/>
    <div className="min-h-screen bg-[#0f172a] p-8 text-white">
      <h1 className="text-3xl text-center font-bold mb-8">Users</h1>

      <input
        type="text"
        placeholder="Search..."
        className="my-3 mx-3  rounded px-3 text-black "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        name=""
        id=""
      />
      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filterSearch.map((user) => (
          <div
            key={user.id}
            className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition"
          >
            {/* Big Name */}
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">
              {user.name}
            </h2>

            {/* Details */}
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-400">User ID:</span>{' '}
                {user.id}
              </p>

              <p>
                <span className="font-semibold text-slate-400">Email:</span>{' '}
                {user.email}
              </p>

              <p>
                <span className="font-semibold text-slate-400">
                  Last Active:
                </span>{' '}
                {user.lastActive}
              </p>
            </div>

            {/* Status + Toggle */}
            <div className="mt-5 flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.isActive
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {user.isActive ? 'Active' : 'Non-Active'}
              </span>

              <button
                onClick={() => toggleActive(user.id)}
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                {user.isActive ? 'Block' : 'Non-Block'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </div>
    </>
  );
}

export default UserList;
