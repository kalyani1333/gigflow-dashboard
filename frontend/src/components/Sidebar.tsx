const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-5">
      <h2 className="text-2xl font-bold text-blue-600">
        GigFlow
      </h2>

      <div className="mt-10 space-y-4">
        <button className="block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100">
          Dashboard
        </button>

        <button className="block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100">
          Leads
        </button>

        <button className="block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;