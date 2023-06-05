import CreateEvent from "./CreateEvent";
import Event from "./event";

type EventDTO = {
  uid: string
  description: string
}

function getEvents(): Promise<EventDTO[]> {
  return new Promise<EventDTO[]>(async (resolve, reject) => {
    try {
      const res = await fetch("http://localhost:8080/events", { cache: 'no-cache' });

      resolve(res.json())
    } catch(e) {
      reject()
    }
  })
}

export default async function Home() {
  const events = await getEvents()

  return (
    <main className="grow grid grid-cols-4 gap-4 auto-rows-min p-8">
      {events.map(({uid, description}) => <Event key={`event-${uid}`} title={uid} description={description} />)}
      <CreateEvent />
    </main>
  );
}
