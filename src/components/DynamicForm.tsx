"use client";

import { useState } from "react";

type Field = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  fields?: Field[];
};

export default function DynamicForm({
  fields,
}: Props) {
  const [formData, setFormData] = useState<{
    [key: string]: string;
  }>({});

  if (!fields?.length) {
    return (
      <div className="bg-yellow-500 text-black p-4 rounded-lg">
        No fields configured
      </div>
    );
  }

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
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      alert(
        "Data saved successfully!"
      );

      setFormData({});

      location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to save data"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800"
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block mb-2">
            {field.label}
          </label>

          <input
            type={field.type}
            value={
              formData[field.name] || ""
            }
            placeholder={field.label}
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
}