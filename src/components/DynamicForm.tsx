"use client";

import { useState } from "react";

type Field = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  fields?: Field[];
  t: any;
};

export default function DynamicForm({
  fields,
  t,
}: Props) {
  const [formData, setFormData] = useState<{
    [key: string]: string;
  }>({});

  const labelMap: Record<string, string> = {
    "Student Name": t.studentName,
    Email: t.email,
    "Phone Number": t.phoneNumber,
    Course: t.course,
  };

  if (!fields?.length) {
    return (
      <div className="bg-yellow-500 text-black p-4 rounded-lg">
        {t.noFieldsConfigured}
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

      alert(t.dataSavedSuccessfully);

      setFormData({});
      location.reload();
    } catch (error) {
      console.error(error);

      alert(t.failedToSaveData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800"
    >
      {fields.map((field) => {
        const translatedLabel =
          labelMap[field.label] ||
          field.label;

        return (
          <div key={field.name}>
            <label className="block mb-2">
              {translatedLabel}
            </label>

            <input
              type={field.type}
              value={
                formData[field.name] || ""
              }
              placeholder={
                translatedLabel
              }
              onChange={(e) =>
                handleChange(
                  field.name,
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
      >
        {t.submit}
      </button>
    </form>
  );
}