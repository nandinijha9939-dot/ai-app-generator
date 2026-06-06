type Props = {
  title?: string;
  t: any;
};

export default function DynamicCard({
  title,
  t,
}: Props) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold">
        {title || t.untitledCard}
      </h2>

      <p className="text-zinc-400 mt-2">
        {t.runtimeDashboard}
      </p>
    </div>
  );
}