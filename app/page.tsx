import Event from "./event";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4">
      <Event
        title="Event title"
        description="Some ver long but unfruitful description"
      />
      <Event
        title="Event title"
        description="Some ver long but unfruitful description"
      />
      <Event
        title="Event title"
        description="Some ver long but unfruitful description"
      />
      <Event
        title="Event title"
        description="Some ver long but unfruitful description"
      />
      <Event
        title="Event title"
        description="Some ver long but unfruitful description"
      />
    </main>
  );
}

export async function getData() {
  const res = await fetch("https://localhost:8081/events");

  return res.json();
}
