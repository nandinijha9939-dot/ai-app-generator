"use client";

import Papa from "papaparse";

export default function CSVImporter() {
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: async (results) => {
        console.log(results.data);

        for (const row of results.data as any[]) {
          await fetch("/api/runtime", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(row),
          });
        }

        alert("CSV Imported Successfully!");
        window.location.reload();
      },
    });
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h2 className="text-xl font-bold mb-4">
        Import CSV
      </h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
    </div>
 );
}