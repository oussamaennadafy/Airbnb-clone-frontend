import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/places/${id}`)
      .then((response) => response.json())
      .then((data) => setPlace(data.body.place))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoader(false));
  }, []);
  return (
    <>
      <Header />
      <section>
        {loader && <p>loading ...</p>}
        {error && <p>{error}</p>}
        {place && <p>{place.title}</p>}
      </section>
    </>
  );
}

export default Place;
