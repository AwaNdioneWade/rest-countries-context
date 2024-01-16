import React, { createContext, useContext, useState } from 'react';
import UseContries from './UseContries';

const CountriesContext = createContext({
  valueInput: '',
  setValueInput: () => {},
  continent: '',
  setContinent: () => {},
  filteredCountries: [],
  handleContinentChange: () => {}
});

export default CountriesContext;

const CountriesContextProvider = ({ children }) => {

  const [valueInput, setValueInput] = useState('');
  const [continent, setContinent] = useState('');
  const countries = UseContries();

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
  };

  // Filter pays par letter saisi
  const filteredByLetter = countries.filter((country) =>
    country.name.common.toLowerCase().includes(valueInput)
  );

  // Filter les pays par continent
  const filteredByContinentAndLetter = filteredByLetter.filter((country) => {
    if (!continent) return true;
    return country.continents.includes(continent);
  });

  const contextValue = {
    valueInput,
    setValueInput,
    continent,
    setContinent,
    filteredCountries: filteredByContinentAndLetter,
    handleContinentChange,
    countries
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};

export {CountriesContextProvider};
