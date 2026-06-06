type Props = {
  t: any;
};

export default function CSVImporter({
  t,
}: Props) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900">
      <h2 className="text-3xl font-bold">
        {t.importStudentData}
      </h2>

      <p className="text-zinc-400 mt-2">
        {t.uploadCsv}
      </p>

      <input
        type="file"
        className="mt-4"
      />
    </div>
  );
}