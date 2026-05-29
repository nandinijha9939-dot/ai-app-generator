"use client";

import { useEffect, useState } from "react";

type Props = {
  data?: any[];
};

export default function DynamicTable({
  data = [],
}: Props) {
  const [runtimeData, setRuntimeData] =
    useState<any[]>([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        "/api/runtime",
        {
          cache: "no-store",
        }
      );

      const result = await res.json();

      const formatted = result.map(
        (item: any) =>
          item.data ?? item
      );

      setRuntimeData(formatted);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(
      loadData,
      3000
    );

    return () =>
      clearInterval(interval);
  }, []);

  const finalData =
    runtimeData.length > 0
      ? runtimeData
      : data;

  if (!finalData.length) {
    return (
      <p className="text-zinc-400">
        No data available
      </p>
    );
  }

  const headers =
    Object.keys(finalData[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-zinc-700 rounded-xl overflow-hidden">
        <thead className="bg-blue-600">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left p-4 capitalize"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {finalData.map(
            (row, index) => (
              <tr
                key={index}
                className="border-t border-zinc-800 hover:bg-zinc-800/50"
              >
                {headers.map(
                  (header) => (
                    <td
                      key={header}
                      className="p-4"
                    >
                      {
                        row[
                          header
                        ]
                      }
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}