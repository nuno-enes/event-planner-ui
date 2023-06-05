export type EventType = {
  title: string
  description?: string
}

export default function Event({
  title,
  description,
}: EventType) {
  return (
    <div className="flex-col bg-slate-300 rounded-md p-4">
      <h1>{title}</h1>
      <textarea className="bg-inherit font-light" defaultValue={description} />
    </div>
  );
}
