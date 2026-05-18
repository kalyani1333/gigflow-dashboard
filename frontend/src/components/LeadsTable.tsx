import { useEffect, useState } from 'react';
import { exportToCSV } from '../utils/exportCSV';

import {
  getLeads,
  deleteLead,
} from '../services/leadService';

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

interface Props {
  search: string;
  status: string;
  source: string;
}

const LeadsTable = ({
  search,
  status,
  source,
}: Props) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =
    useState(1);

  useEffect(() => {
    fetchLeads();
  }, [page]);

  const fetchLeads = async () => {
    try {
      const data = await getLeads(page);

      setLeads(data.data);

      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteLead(id);

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">
      <div className="p-5 border-b flex items-center justify-between">
  <h2 className="text-xl font-semibold">
    Recent Leads
  </h2>

  <button
    onClick={() =>
      exportToCSV(leads)
    }
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
  >
    Export CSV
  </button>
</div>
         

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Source</th>
            <th className="text-left p-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {leads
            .filter((lead) => {
              const matchesSearch =
                lead.name
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  );

              const matchesStatus =
                status === '' ||
                lead.status === status;

              const matchesSource =
                source === '' ||
                lead.source === source;

              return (
                matchesSearch &&
                matchesStatus &&
                matchesSource
              );
            })
            .map((lead) => (
              <tr
                key={lead._id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {lead.name}
                </td>

                <td className="p-4 text-gray-600">
                  {lead.email}
                </td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {lead.status}
                  </span>
                </td>

                <td className="p-4">
                  {lead.source}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      handleDelete(lead._id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex items-center justify-center gap-4 p-5">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="bg-gray-200 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() =>
            setPage(page + 1)
          }
          className="bg-gray-200 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LeadsTable;