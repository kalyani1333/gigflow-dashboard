import { useState } from 'react';

import StatsCards from '../components/StatsCards';
import LeadsTable from '../components/LeadsTable';
import FilterBar from '../components/FilterBar';
import AddLeadForm from '../components/AddLeadForm';

import useDebounce from '../hooks/useDebounce';

const Dashboard = () => {
  const [search, setSearch] =
    useState('');

  const [status, setStatus] =
    useState('');

  const [source, setSource] =
    useState('');

  const debouncedSearch =
    useDebounce(search, 300);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Smart Leads Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage and track your leads efficiently
          </p>
        </div>
      </div>

      <StatsCards />

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        source={source}
        setSource={setSource}
      />

      <AddLeadForm />

      <LeadsTable
        search={debouncedSearch}
        status={status}
        source={source}
      />
    </div>
  );
};

export default Dashboard;