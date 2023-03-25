import React, { useState } from "react";
import "./App.css";
import { DisplayData } from "./DisplayData";
import { Header } from "./Header";
import { Search } from "./Search";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchData) => {
    setData(null);
    setLoading(true);
    const dictionaryApiFetch = fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`
    );
    Promise.all([dictionaryApiFetch])
      .then(async (response) => {
        const dictionaryFetchResponse = await response[0].json();
        setData(dictionaryFetchResponse);
        console.log(dictionaryFetchResponse);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        {location.reload()}
      });
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        {/* <h3 className="fw-bold text-center my-4">Piyush's Dictionary App</h3> */}
        <Search handleSearch={handleSearch} />
        {loading && (
          <>
            <h1 className="my-5">Loading...</h1>
          </>
        )}
        {data && <DisplayData data={data} />}
      </div>
    </div>
  );
}

export default App;
