import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationForm({ records, setRecords }) {

  const [E_id, setE_id] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyExist = records.some(
      (item) => item.E_id === Number(E_id)
    );

    if (alreadyExist) {
      alert("Employee ID already exists");
      return;
    }

    const newRecord = {
      E_id: Number(E_id),
      name,
      email,
      mobile,
    };

    setRecords([...records, newRecord]);

    setE_id("");
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>

      <h1>Register Employee</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          placeholder="Employee ID"
          value={E_id}
          onChange={(e) => setE_id(e.target.value)}
        />

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      <br />

      <Link to="/table">
        <button>View Employee Table</button>
      </Link>

    </div>
  );
}

export default RegistrationForm;