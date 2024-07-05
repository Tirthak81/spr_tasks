import React, { useState, useEffect } from "react";
import "./checklist.css";

function Checklist() {
  const [names, setNames] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNames(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const userId = parseInt(e.target.value);
    if (e.target.checked) {
      setChecked([...checked, userId]);
    } else {
      setChecked(checked.filter((id) => id !== userId));
    }
  };

  const filteredNames = names.filter((item) => checked.includes(item.id));

  return (
    <div>
      <h3>Check List</h3>
      {names.map((iteam, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            value={iteam.id}
            id={`unmae-${iteam.id}`}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor={`unmae-${iteam.id}`} key={iteam.id}>
            {iteam.name}
          </label>
          <br />
        </div>
      ))}
      {checked.length > 0 ? (
        <div>
          <table className="chek-table">
            <thead>
              <tr>
                <th>Id</th>
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
              {filteredNames.map((iteam, index) => (
                <tr key={iteam.id}>
                  <td>{index + 1}</td>
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
      ) : null}
    </div>
  );
}

export default Checklist;
