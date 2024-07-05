import React, { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [originalData, setOriginalData] = useState([]);
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setOriginalData(data);
        setInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);

    if (search === "") {
      setInfo(originalData);
    } else {
      const filtered = originalData.filter(
        (data) =>
          data.name.toLowerCase().includes(search) ||
          data.username.toLowerCase().includes(search) ||
          data.email.toLowerCase().includes(search) ||
          data.address.suite.toLowerCase().includes(search) ||
          data.address.city.toLowerCase().includes(search) ||
          data.address.zipcode.toLowerCase().includes(search) ||
          data.address.street.toLowerCase().includes(search) ||
          data.phone.toLowerCase().includes(search) ||
          data.website.toLowerCase().includes(search) ||
          data.company.name.toLowerCase().includes(search)
      );
      setInfo(filtered);
    }
  };

  return (
    <div className="srch-box">
      <h2>Search List</h2>
      <input type="text" value={searchTerm} onChange={(e) => handleSearch(e)} />
      <table className="srch-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {info.map((iteam) => (
            <tr key={iteam.id}>
              <td>{iteam.name}</td>
              <td>{iteam.username}</td>
              <td>{iteam.email}</td>
              <td>
                {iteam.address.street +
                  ", " +
                  iteam.address.suite +
                  ", " +
                  iteam.address.city +
                  ", " +
                  iteam.address.zipcode}
              </td>
              <td>{iteam.phone}</td>
              <td>{iteam.website}</td>
              <td>{iteam.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
