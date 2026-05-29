"use client";

import { useState } from "react";

type Field = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  fields: Field[];
};

export default function DynamicForm({
  fields,
}: Props) {
  const [formData, setFormData] = useState<{
    [key: string]: string;
  }>({});

  const handleChange = (
    name: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/runtime",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            resource: "students",
            data: formData,
          }),
        }
      );

      const result =
        await response.json();

      console.log(result);

      alert(
        "Data saved successfully!"
      );
    } catch (error) {
      console.error(error);

      alert("Failed to save data");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-zinc-900 p-6 rounded-xl border border-zinc-700"
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-white mb-2">
            {field.label}
          </label>

          <input
            type={field.type}
            placeholder={field.label}
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value
              )
            }
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-600"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
      >
        Submit
      </button>
    </form>
  );
}