import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
//nativeSelect lets us pick a country
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  //this is what enables us to check which countries we want

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultvalue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
//return function above is what allows us to choose which country we would like to view
// key of I means 'index'. index is a 2nd parameter to the map.  data for country chosen is found in (e.target.value) line 24

export default CountryPicker;
