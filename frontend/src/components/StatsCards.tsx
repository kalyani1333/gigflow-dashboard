import { useEffect, useState } from 'react';
import { getLeads } from '../services/leadService';

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

const StatsCards = () => {
  const [stats, setStats] = useState([
    {
      title: 'Total Leads',
      value: 0,
    },
    {
      title: 'Qualified',
      value: 0,
    },
    {
      title: 'Contacted',
      value: 0,
    },
    {
      title: 'Lost',
      value: 0,
    },
  ]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getLeads(1);

      const leads: Lead[] = data.data;

      const totalLeads = leads.length;

      const qualified = leads.filter(
        (lead) => lead.status === 'Qualified'
      ).length;

      const contacted = leads.filter(
        (lead) => lead.status === 'Contacted'
      ).length;

      const lost = leads.filter(
        (lead) => lead.status === 'Lost'
      ).length;

      setStats([
        {
          title: 'Total Leads',
          value: totalLeads,
        },
        {
          title: 'Qualified',
          value: qualified,
        },
        {
          title: 'Contacted',
          value: contacted,
        },
        {
          title: 'Lost',
          value: lost,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

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