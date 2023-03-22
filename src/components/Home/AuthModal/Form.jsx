import React, { useEffect, useState } from "react";

function Form() {
  const [country, setCountry] = useState("United State");
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("https://countrycode.dev/api/calls", {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="p-4">
      <h3 className="py-4 text-xl">Welcome to Airbnb</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            className="border relative border-b-transparent border-gray-400 px-2 py-1 rounded-t-md"
            name="country"
            htmlFor="country"
          >
            <span className="text-xs text-gray-400">Country/Region</span>
            <p>{country}</p>
            <select
              className="w-full h-full absolute top-0 left-0 opacity-0"
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Morocco">Morocco (+212)</option>
              <option value="United State">United State (+1)</option>
            </select>
          </label>
          <input
            className="border border-gray-400 px-4 py-3 rounded-b-md"
            type="number"
            name="phone number"
            placeholder="Phone number"
          />
        </div>
        <div>
          <span className="text-xs font-normal">
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </span>
          <a className="text-xs underline">Privacy Policy</a>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg py-3 text-white font-semibold bg-violet-400"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Form;
