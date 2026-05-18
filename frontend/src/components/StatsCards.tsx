const stats = [
  {
    title: 'Total Leads',
    value: '24',
  },
  {
    title: 'Qualified',
    value: '10',
  },
  {
    title: 'Contacted',
    value: '8',
  },
  {
    title: 'Lost',
    value: '6',
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-sm p-5"
        >
          <h3 className="text-gray-500 text-sm">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;