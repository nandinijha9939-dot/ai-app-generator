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
  <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-xl mb-8">
    <h2 className="text-2xl font-bold mb-4">
      Import Student Data
    </h2>

    <div className="flex items-center gap-4 flex-wrap">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="text-sm"
      />

      <span className="text-zinc-400">
        Upload CSV file containing student records
      </span>
    </div>
  </div>
);
}