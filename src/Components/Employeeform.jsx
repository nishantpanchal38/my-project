import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { EmployeeContext } from "./EmployeeContext";
import { useDispatch, useSelector } from "react-redux";
import { Add_Employee, addemployee, Update_Employee, updateemployee } from "../redux/employeeActions";


// function Employeeform({ record, setRecords, Edit, setEdit }) {
// now we can remove the Edit,setEdit......

// function Employeeform({ record, setRecords }) {

function Employeeform() {
  const record=useSelector((state)=>state.record);
  const dispatch=useDispatch();



  // jo hmne function m pass kraya tha usse context api k through pass kra do....
  // const {record,setRecords}=useContext(EmployeeContext)
  // const [id, setId] = useState(0);
  
  const [E_id,setE_id] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  
  // useParams() It reads dynamic values from the URL.
  // every where we have to change (Edit) with (id)
  const { id } = useParams();
  // It returns the first element that matches the condition.
  const employee = record.find(
    // Each item in the array is checked
    (item) => item.E_id === Number(id)
  );


  useEffect(() => {
    // if (Edit !== null) {
    // here we change the logic and instead of above we use employee variable....
    if (employee) {
      setE_id(employee.E_id);
      setName(employee.name);
      setEmail(employee.email);
      setMobile(employee.mobile);
    }
  // }, [Edit]);
  }, [employee]);
  
  
  const navigate = useNavigate();
  // this is handlesubmit function which include the all submit or update things.....
  const handleSubmit = (e) => {
    // e.preventDefault use because after click page or browser reloads automaticaly so it prevent
     e.preventDefault();
    //  if(Edit!==null){
     if(id){
       const updateRecord = record.map((item) =>
  // item.E_id === Edit.E_id
  item.E_id === Number(id)
    ? { ...item, name: name, email: email, mobile: mobile }
    : item
);
      //  setRecords(updateRecord)
      // by redux......................................................
      dispatch(updateemployee({
        E_id:Number(id),
        name,
        email,
        mobile
      }))

       alert("Employee updated successfully ✅");
      //  redirect on table page after updation
       navigate("/table");
       
      //  setEdit(null);
       setE_id("")
       setName("");
       setEmail("");
       setMobile("");
       return;
      }else{
          //  it will prevent that user don't enter same id by .some() this check only on condition is true
          const alreadyexist=record.some((item)=>item.E_id===Number(E_id));
          if (alreadyexist){
              alert("This Employee_Id is already Exist")
            return;
          }
        }
    // it will create user object from input values   
    const newRecord = {
      // id: id,
      E_id:Number(E_id),
      
      // this for by default value or unique id
      // E_id:Date.now(E_id),
      name: name,
      email: email,
      mobile: mobile,
    };
    // in this ...record copy old data and merged or add with new data
    // setRecords([...record, newRecord]);

    // by redux..........................................................................
    dispatch(addemployee(newRecord))
    alert("Employee added successfully ✅");

    // after submitting all input fields become empty 
    // setId("");
    setE_id("")
    setName("");
    setEmail("");
    setMobile("");
  

  

  };

  return (
    <>
     <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Register</h1>
            {/* <label>
              Sr.no <span>:</span>
            </label>
            <input
              type="number"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> */}
            <br />
            <label >Employee_ID<span>:</span>
            </label>
            <input type="number" placeholder="Enter Employee ID" 
            value={E_id}
            // to read only in case of edit
            // readOnly={Edit}
            readOnly={id}
            onChange={(e)=>setE_id(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <br />


            <label>
              Name <span>:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <br />
            <label>
              Email <span>:</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <br />
            <label>
              Contact <span>:</span>
            </label>

            {/* this for provide validation users can-not enter above 10 digit */}
            <input
              type="number"
              placeholder="Enter Number"
              value={mobile}
              onChange={(e) => {const value=(e.target.value)
                if (value.length!==10+1){
                  setMobile(value)}}
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <br />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              {/* {Edit !== null ? "Update" : "Submit"}</button> */}
              {id ? "Update" : "Submit"}</button>
          </form>
        </div>
        </div>
        </>
  )
}

export default Employeeform;