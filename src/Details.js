
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountriesContext from './CountriesContext';


function Details({ countries }) {
  const { countryName } = useParams();

  const { filteredCountries } = useContext(CountriesContext);
  const country = filteredCountries.find((c) => c.name && c.name.common === countryName);

  if (!country) {
    
    return (
      <div>
        <h2>Country not found</h2>
      </div>
    );
  }


  const { nativeName, population, continents, capital, subregion, tld, currencies, languages } = country;

  return (
    <div className="container mt-0 mt-md-5">
      <div className="row">
        <div className="col-12 my-5">
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={country.flags.png} alt={`${countryName} Flag`} style={{ width: '100%', height: '150px' }} />
        </div>
        <div className="col-12 col-md-6 offset-md-2 card-body mt-5 mt-md-0">
            <div className='row'>
                <h4>Name: {countryName}</h4>
                <div className='col-12 col-md-6'>
                    <p>Native Name: {nativeName}</p>
                    <p>Population: {population}</p>
                    <p>Region: {continents[0]}</p>
                    <p>Sub Region: {subregion}</p>
                    <p>Capital: {capital[0]}</p>
                </div>
                <div className='col-12 col-md-6'>
                    <p>Top Level Domain: {tld[0]}</p>
                    <p>Currencies: {}</p>
                    <p>Langue: {languages.nld}, {languages.fra}, {languages.deu}</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Details;

