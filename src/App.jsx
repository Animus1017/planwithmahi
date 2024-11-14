import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";
function App() {
  const[tours,setTour]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTour(newTours);
  }
  if(tours.length===0){
    return( 
      <div className="w-screen h-screen overflow-x-hidden box-border flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-xl">No Tours Left</h1>
        <button onClick={()=>setTour(data)} className="text-sm bg-gray-200 font-medium py-1 px-8 rounded-md hover:bg-gray-100 transition-all delay-200">Refresh</button>
      </div>
    );
  } 
  return (
    <div className="w-screen h-screen overflow-x-hidden box-border">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
