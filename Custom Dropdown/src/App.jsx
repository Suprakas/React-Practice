import { useState } from 'react';
import './App.css';

function App() {
  const countries = [
    {
      name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai']
    },
    {
      name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi']
    },
    {
      name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong']
    },
  ];

  // State to store the selected country value
  const [countryValue, setCountryValue] = useState('');

  // Find the selected country object
  const selectedCountry = countries.find(c => c.value === countryValue);

  return (
    <div>
      {/* Country dropdown */}
      <select
        value={countryValue}
        onChange={(e) => setCountryValue(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      {/* City dropdown */}
      <select disabled={!selectedCountry}>
        <option value="">Select City</option>
        {selectedCountry?.cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
