import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCountries from './allCountries';
import Details from './Details';
import CountriesContext from './CountriesContext';

export default function App() {
  const {
    countries
  } = useContext(CountriesContext);
  return (
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/details/:countryName" element={<Details countries={countries} />} />
      </Routes>
  );
}
