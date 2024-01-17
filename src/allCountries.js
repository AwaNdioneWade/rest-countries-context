import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CountriesContext from './CountriesContext';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function AllCountries(){
  
  const {
          valueInput,
          setValueInput,
          handleContinentChange,
          filteredCountries,
        } = useContext(CountriesContext);

    return(
        <div style={{background: 'hsl(0, 0%, 98%)', color: 'hsl(207, 26%, 17%)'}}>
            <Entete />
            <div className="container-fluid p-5">
                <div className="row">
                    <Input  type="text" 
                      placeholder="Search for a country..." 
                      value={valueInput}
                      onChange={(e) => setValueInput(e.target.value)}
                    />
                    <Select setContinent={handleContinentChange} />
                </div>
            </div>
            <div className='container-fluid px-5'>
                <div className='row my-5 d-flex justify-content-center align-items-center'>
                    <Card countries={filteredCountries} />
                </div>
            </div>
        </div>
    )
}

// Composant card
const Card = ({countries}) => {

  const navigate = useNavigate();

  const handleCardClick = (countryName) => {
    navigate(`/details/${countryName}`);
  }

    return (
            <>
              {countries.map((country, index) => (
  
                <div onClick={() => handleCardClick(country.name.common)} key={index} className="col-12 col-md-3 card m-2 modelight" style={{width: '18rem', padding: '0', display: 'block', textDecoration: 'none'}}>
                  <img src= {country.flags.png} className="card-img-top" alt="..." style={{width: '100%', height: '150px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p className="card-text">Population : {country.population}</p>
                    <p className="card-text">Region : {country.continents}</p>
                    <p className="card-text">Capital : {country.capital}</p>
                  </div>
                </div>
  
              ))}
            </>
    )
}

export const Entete = () => {
  
  const {mode, handleModeChange} = useContext(CountriesContext)
    return (
      <div className="container-fluid p-5" style={{background: 'hsl(0, 0%, 100%)'}}>
            <div className="row">
                <div className="col-6">
                    <h1>Where in the world?</h1>
                </div>
                <div className="col-6 text-end">
                    <h3 onClick={()=>{handleModeChange()}}> {mode ? <span style={{cursor: "pointer"}}><MdDarkMode /> Dark Mode</span> : <span style={{cursor: "pointer"}}><MdOutlineDarkMode /> light Mode</span>} </h3>
                    {/* <h3 onClick={()=>{handleModeChange()}}> <span style={{cursor: "pointer"}}>{mode ? <MdDarkMode /> "Dark Mode"  : <MdOutlineDarkMode /> "light Mode"}</span>  </h3> */}
                </div>
            </div>
        </div>
    )
}

// Composant input
const Input = ({ type, value, onChange, placeholder, style }) => {

    return (
        <div className="col-12 col-md-6">
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}  style={style} className='form-control mt-3' />
        </div>
    )
}
  
  // Composant select
const Select = ({setContinent}) => {
  
    return (
            <div className="col-12 col-md-6 text-md-end mt-md-0 mt-5">
            <select onChange={setContinent}>
                <option value="">All</option>
                <option value="Africa" >Africa</option>
                <option value="North America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
          </div>
    )
}

export default AllCountries;