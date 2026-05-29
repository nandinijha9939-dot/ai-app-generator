"use client";

type Props = {
  lang: string;
  setLang: (lang: string) => void;
};

export default function LanguageSwitcher({
  lang,
  setLang,
}: Props) {
  return (
    <select
      value={lang}
      onChange={(e) =>
        setLang(e.target.value)
      }
      className="bg-zinc-800 px-3 py-2 rounded-lg"
    >
      <option value="en">
        English
      </option>

      <option value="hi">
        हिन्दी
      </option>
    </select>
  );
}