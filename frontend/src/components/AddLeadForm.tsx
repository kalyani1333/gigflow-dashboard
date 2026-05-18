import { useState } from 'react';

import { createLead } from '../services/leadService';

const AddLeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'New',
    source: 'Website',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createLead(formData);

      alert('Lead Added Successfully');

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm p-6 mt-8"
    >
      <h2 className="text-2xl font-semibold mb-5">
        Add New Lead
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
        >
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Lost</option>
        </select>

        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
        >
          <option>Website</option>
          <option>Instagram</option>
          <option>Referral</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-5 hover:bg-blue-700"
      >
        Add Lead
      </button>
    </form>
  );
};

export default AddLeadForm;