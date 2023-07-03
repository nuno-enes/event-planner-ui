'use client'

import { FormEventHandler, useState } from "react"

export default function CreateEvent() {
  const [{title, description}, setEventForm] = useState({ title: '', description: '' })

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()

    await fetch("/api/events", { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({uid: title, description}) })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="etitle">Title:</label>
      <input type="text" id="etitle" name="etitle" value={title} onChange={(e) => setEventForm(prevForm => ({...prevForm, title: e.target.value}))} />
      <label htmlFor="edescription">Description:</label>
      <input type="text" id="edescription" name="edescription" value={description} onChange={(e) => setEventForm(prevForm => ({...prevForm, description: e.target.value}))} />
      <input type="submit" value="Create" className="cursor-pointer bg-blue-900 text-white rounded-lg p-4"/>
    </form>
  );
}