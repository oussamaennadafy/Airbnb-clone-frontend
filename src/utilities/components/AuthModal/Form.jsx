import React, { useEffect, useState } from "react";

//assets
import { downArrow } from "./../../../assets/icons";
import MainButton from "./../MainButton";
import context from "./../../../context";

function Form() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  useEffect(() => {
    fetch(
      `http://${context.SERVER_IP}:${context.SERVER_PORT}/api/v1/countries/phonePrefixs`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.body.phonePrefixes);
        setCountry(data.body.phonePrefixes[0]?.name);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4">
      <h3 className="py-4 text-2xl">Welcome to Airbnb</h3>
      <form className="flex flex-col gap-2 font-normal">
        <div className="flex flex-col py-2">
          <label
            className="border h-14 relative border-b-transparent border-gray-400 px-2 py-1 rounded-t-md"
            name="country"
            htmlFor="country"
          >
            <span className="text-xs text-gray-400">Country/Region</span>
            <p className="-mt-1">{country}</p>
            <img
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3"
              src={downArrow}
              alt="drop down arrow"
            />
            <select
              className="w-full h-full absolute top-0 left-0 opacity-0"
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option value={country.phonePrefixe} key={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
          <input
            className="border border-gray-400 px-4 py-3 h-14 border-b-0"
            type="number"
            name="phone number"
            placeholder="Phone number"
          />
          <input
            className="border border-gray-400 px-4 py-3 h-14 rounded-b-md"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <span className="text-xs font-normal mb-2">
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </span>
          <a className="text-xs underline block font-semibold mb-1">
            Privacy Policy
          </a>
        </div>
        <MainButton label="Continue" />
      </form>
    </div>
  );
}

export default Form;
