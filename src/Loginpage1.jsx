import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Loginpage1() {

  const [E_id, setE_id] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("+91 ");

  const [currentpage, setCurrentPage] = useState(1);
  const recordperpage = 10;

  const [record, setRecords] = useState([
    { E_id: 101, name: "Aarav Sharma", email: "aarav.sharma1@example.com", mobile: "9876543210" },
    { E_id: 102, name: "Vivaan Patel", email: "vivaan.patel2@example.com", mobile: "9876543211" },
    { E_id: 103, name: "Aditya Verma", email: "aditya.verma3@example.com", mobile: "9876543212" },
    { E_id: 104, name: "Vihaan Gupta", email: "vihaan.gupta4@example.com", mobile: "9876543213" },
    { E_id: 105, name: "Arjun Singh", email: "arjun.singh5@example.com", mobile: "9876543214" },
  ]);

  const indexOfLastRecord = currentpage * recordperpage;
  const indexOfFirstRecord = indexOfLastRecord - recordperpage;
  const currentRecords = record.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(record.length / recordperpage);

  const [sortOrder, setSortOrder] = useState("asc");
  const [Edit, setEdit] = useState(null);

  const handleEdit = (record) => {
    setEdit(record.E_id);
    setE_id(record.E_id);
    setName(record.name);
    setEmail(record.email);
    setMobile(record.mobile);
  };

  const handleSort = (field) => {
    const sortedData = [...record].sort((a, b) => {
      if (field === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (field === "E_id") {
        return sortOrder === "asc"
          ? a.E_id - b.E_id
          : b.E_id - a.E_id;
      }
    });

    setRecords(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Edit !== null) {
      const updateRecord = record.map((item) =>
        item.E_id === Edit
          ? { ...item, name: name, email: email, mobile: mobile }
          : item
      );

      setRecords(updateRecord);
      setEdit(null);
      setE_id("");
      setName("");
      setEmail("");
      setMobile("+91 ");
      return;
    }

    const alreadyexist = record.some(
      (item) => item.E_id === Number(E_id)
    );

    if (alreadyexist) {
      alert("Employee ID already exists");
      return;
    }

    const newRecord = {
      E_id: Number(E_id),
      name,
      email,
      mobile,
    };

    setRecords([...record, newRecord]);

    setE_id("");
    setName("");
    setEmail("");
    setMobile("+91 ");
  };

  const handleDel = (E_id) => {
    const updateRecord = record.filter((item) => item.E_id !== E_id);
    setRecords(updateRecord);
  };

  return (
    <Router>

      <div className="p-6">

        {/* Navigation */}

        <div className="mb-4 space-x-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Form
          </Link>

          <Link to="/data" className="bg-green-500 text-white px-4 py-2 rounded">
            Table
          </Link>
        </div>

        <Routes>

          {/* FORM PAGE */}

          <Route
            path="/"
            element={
              <form onSubmit={handleSubmit} className="space-y-3">

                <input
                  type="number"
                  placeholder="Employee ID"
                  value={E_id}
                  readOnly={Edit !== null}
                  onChange={(e) => setE_id(e.target.value)}
                  className="border p-2"
                />

                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2"
                />

                <input
                  type="number"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="border p-2"
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  {Edit !== null ? "Update" : "Submit"}
                </button>

              </form>
            }
          />

          {/* TABLE PAGE */}

          <Route
            path="/data"
            element={
              <div>

                <table className="border w-full text-center">

                  <thead>

                    <tr className="bg-gray-200">
                      <th>Sr</th>

                      <th onClick={() => handleSort("E_id")} className="cursor-pointer">
                        Employee ID
                      </th>

                      <th onClick={() => handleSort("name")} className="cursor-pointer">
                        Name
                      </th>

                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Actions</th>
                    </tr>

                  </thead>

                  <tbody>

                    {currentRecords.map((data, index) => (

                      <tr key={index}>

                        <td>{indexOfFirstRecord + index + 1}</td>
                        <td>{data.E_id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile}</td>

                        <td>

                          <button
                            onClick={() => handleDel(data.E_id)}
                            className="bg-red-500 text-white px-2 py-1"
                          >
                            Delete
                          </button>

                          <button
                            onClick={() => handleEdit(data)}
                            className="bg-gray-500 text-white px-2 py-1 ml-2"
                          >
                            Edit
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default Loginpage1;