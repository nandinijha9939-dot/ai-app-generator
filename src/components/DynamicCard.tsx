type Props = {
  title?: string;
};

export default function DynamicCard({
  title,
}: Props) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold">
        {typeof title === "string"
          ? title
          : "Untitled Card"}
      </h2>

      <p className="text-zinc-400 mt-2">
        Runtime generated dashboard component
      </p>
    </div>
  );
}