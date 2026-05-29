type Props = {
  title: string;
};

export default function DynamicCard({ title }: Props) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}