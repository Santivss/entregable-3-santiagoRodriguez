import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import ErrorFetch from "./components/ErrorFetch";


function App() {
  
  //https://rickandmortyapi.com/api/location/3
  
  const [location, setLocation] = useState();
  const [locationInput , setLocationInput] = useState();
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let URL

    if(locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomLocation = Math.ceil(Math.random() * 126);
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    }

    axios
      .get(URL)
      .then((res) => {
        setHasError(false)
        setLocation(res.data)})
      .catch((error) => {
        setHasError(true)
        console.log(error)
      });
  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <div className="image_container">
        <img className="image3" src="./src/assets/images/image3.png" alt="" />
        <img className="image2" src="./src/assets/images/image2.png" alt="" /> 
      </div>
      <div className="title_container">
        <h1>Rick And Morty</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input className="inp" id="inputSearch" type="text" />
          <button className="btn">Search</button>
        </form>
      </div>
      {
        hasError ? 
        <ErrorFetch/> 
        :
        <>
          <Location location={location} />
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentInfo key={url} url={url} />
            ))}
          </div>
        </>
      }

    </div>
  );
}

export default App;
