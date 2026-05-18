interface Props {
  search: string;

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;

  status: string;

  setStatus: React.Dispatch<
    React.SetStateAction<string>
  >;

  source: string;

  setSource: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const FilterBar = ({
  search,
  setSearch,
  status,
  setStatus,
  source,
  setSource,
}: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border border-gray-300 rounded-xl px-4 py-3 w-full md:w-1/3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-4">
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">
            All Status
          </option>

          <option value="New">
            New
          </option>

          <option value="Contacted">
            Contacted
          </option>

          <option value="Qualified">
            Qualified
          </option>

          <option value="Lost">
            Lost
          </option>
        </select>

        <select
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
          className="border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">
            All Sources
          </option>

          <option value="Website">
            Website
          </option>

          <option value="Instagram">
            Instagram
          </option>

          <option value="Referral">
            Referral
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;