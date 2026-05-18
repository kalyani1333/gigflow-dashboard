export const exportToCSV = (
  leads: any[]
) => {
  const headers = [
    'Name',
    'Email',
    'Status',
    'Source',
  ];

  const rows = leads.map((lead) => [
    lead.name,
    lead.email,
    lead.status,
    lead.source,
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) => row.join(','))
    .join('\n');

  const blob = new Blob(
    [csvContent],
    {
      type: 'text/csv;charset=utf-8;',
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement('a');

  link.href = url;

  link.setAttribute(
    'download',
    'leads.csv'
  );

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};