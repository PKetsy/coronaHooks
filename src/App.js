import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //fetch data
    //set the state
    this.setState({ data: fetchedData, country: country });
  };
  //this method changes the state of the country.  Notice handleCountryChange is a prop for <CountryPicker /> below, as well
  //  as in CountryPicker.jsx as a prop for the const 'CountryPicker'

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src='/images/coronaImage.png'
          alt='COVID-19'
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

//App is the parent component to: Cards, Country Picker, and Chart
