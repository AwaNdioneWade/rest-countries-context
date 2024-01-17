import React, { useState, useEffect } from 'react';

export default function UseContries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Erreur de récupération des données:', error))
  }, []);

  return countries;
}