'use client'
import DestinationSearch from "@/components/DestinationSearch";
import PerformerSearch from "@/components/PerformerSearch";
import Table from "@/components/Table";
import VenueSearch from "@/components/VenueSearch";
import { useRef, useState } from "react";
export default function Home() {
  const inputValue = useRef();
  const [inputSelected, setInputSelected] = useState(null)
  const [result, setResult] = useState(null);

  const handleSelect = () => {
    setInputSelected(inputValue.current.value)
    setResult(null)
  }

  const handleSubmitDestination = (formData) => {
    let data = btoa(JSON.stringify(formData))
    fetch('http://127.0.0.1:8000/api/destination?data=' + data)
      .then(response => response.json())
      .then(data => {
        setResult(JSON.parse(data))
      })
      .catch(e => console.log(e))
  };

  const handleSubmitVenue = (formData) => {
    console.log("Entro:" + JSON.stringify(formData));
    let data = btoa(JSON.stringify(formData))
    fetch('http://127.0.0.1:8000/api/venue?data=' + data)
      .then(response => response.json())
      .then(data => {
        setResult(JSON.parse(data))
      })
      .catch(e => console.log(e))
  };
  const handleSubmitPerformer = (formData) => {
    let data = btoa(JSON.stringify(formData))
    fetch('http://127.0.0.1:8000/api/performe?data=' + data)
      .then(response => response.json())
      .then(data => {
        setResult(JSON.parse(data))
      })
      .catch(e => console.log(e))
  };
  

  return (
    <>

      <div className="max-w-md mx-auto mb-5">
        <select
          ref={inputValue}
          defaultValue={"0"}
          onChange={handleSelect}
          className="w-full px-4 py-2 mt-5 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="0" disabled>Selecciona la búsqueda</option>
          <option value="destination">Destination</option>
          <option value="venue">Venue</option>
          <option value="performer">Performer</option>
        </select>
      </div>

      {
        inputSelected === "destination" ? <DestinationSearch onSubmit={handleSubmitDestination} /> :
          inputSelected === "venue" ? <VenueSearch onSubmit={handleSubmitVenue}/> :
            inputSelected === "performer" ? <PerformerSearch onSubmit={handleSubmitPerformer} /> : null
      }

      {
        result ? <div className="mt-5">
          <Table events={result.data.results} />
        </div> : null
      }
    </>
  );
}
