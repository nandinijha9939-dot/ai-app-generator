type Props = {
  t: any;
};

export default function NotificationPanel({
  t,
}: Props) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900">
      <h2 className="font-bold text-xl">
        {t.notifications}
      </h2>

      <p className="mt-3">
        {t.studentRecordCreated}
      </p>
    </div>
  );
}