import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    // setSearchQuery(inputData);
    handleSearch(searchQuery);
    setSearchQuery("");
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <input
          className="w-75 border-rounded p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter the Word to Search"
        />
        <Button type="submit" className="ms-4" onClick={handleSubmit}>Search</Button>
      </div>
    </>
  );
};
