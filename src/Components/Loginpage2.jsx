import React,{useState} from 'react'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

function Loginpage2() {

    const [id, setId] = useState(0);

  const [E_id, setE_id]=useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("+91 ");
//   const navigate = useNavigate();

  // for pagenation.........
  const [currentpage,setCurrentPage]=useState(1);
  const recordperpage=10;

//   this stored all submited values in array form 
  const [record, setRecords] = useState([
  { E_id: 101, name: "Aarav Sharma", email: "aarav.sharma1@example.com", mobile: "9876543210" },
  { E_id: 102, name: "Vivaan Patel", email: "vivaan.patel2@example.com", mobile: "9876543211" },
  { E_id: 103, name: "Aditya Verma", email: "aditya.verma3@example.com", mobile: "9876543212" },
  { E_id: 104, name: "Vihaan Gupta", email: "vihaan.gupta4@example.com", mobile: "9876543213" },
  { E_id: 105, name: "Arjun Singh", email: "arjun.singh5@example.com", mobile: "9876543214" },
  { E_id: 106, name: "Sai Kumar", email: "sai.kumar6@example.com", mobile: "9876543215" },
  { E_id: 107, name: "Reyansh Shah", email: "reyansh.shah7@example.com", mobile: "9876543216" },
  { E_id: 108, name: "Krishna Iyer", email: "krishna.iyer8@example.com", mobile: "9876543217" },
  { E_id: 109, name: "Ishaan Mehta", email: "ishaan.mehta9@example.com", mobile: "9876543218" },
  { E_id: 110, name: "Rudra Nair", email: "rudra.nair10@example.com", mobile: "9876543219" },

  { E_id: 111, name: "Anaya Joshi", email: "anaya.joshi11@example.com", mobile: "9876543220" },
  { E_id: 112, name: "Diya Reddy", email: "diya.reddy12@example.com", mobile: "9876543221" },
  { E_id: 113, name: "Aadhya Kulkarni", email: "aadhya.kulkarni13@example.com", mobile: "9876543222" },
  { E_id: 114, name: "Myra Desai", email: "myra.desai14@example.com", mobile: "9876543223" },
  { E_id: 115, name: "Sara Kapoor", email: "sara.kapoor15@example.com", mobile: "9876543224" },
  { E_id: 116, name: "Ira Malhotra", email: "ira.malhotra16@example.com", mobile: "9876543225" },
  { E_id: 117, name: "Saanvi Choudhary", email: "saanvi.choudhary17@example.com", mobile: "9876543226" },
  { E_id: 118, name: "Riya Bansal", email: "riya.bansal18@example.com", mobile: "9876543227" },
  { E_id: 119, name: "Kavya Menon", email: "kavya.menon19@example.com", mobile: "9876543228" },
  { E_id: 120, name: "Meera Pillai", email: "meera.pillai20@example.com", mobile: "9876543229" },

  { E_id: 121, name: "Dev Mishra", email: "dev.mishra21@example.com", mobile: "9876543230" },
  { E_id: 122, name: "Yash Thakur", email: "yash.thakur22@example.com", mobile: "9876543231" },
  { E_id: 123, name: "Harsh Agrawal", email: "harsh.agrawal23@example.com", mobile: "9876543232" },
  { E_id: 124, name: "Kunal Arora", email: "kunal.arora24@example.com", mobile: "9876543233" },
  { E_id: 125, name: "Manav Sinha", email: "manav.sinha25@example.com", mobile: "9876543234" },
  { E_id: 126, name: "Tanvi Bhatt", email: "tanvi.bhatt26@example.com", mobile: "9876543235" },
  { E_id: 127, name: "Sneha Tiwari", email: "sneha.tiwari27@example.com", mobile: "9876543236" },
  { E_id: 128, name: "Pooja Yadav", email: "pooja.yadav28@example.com", mobile: "9876543237" },
  { E_id: 129, name: "Nisha Pandey", email: "nisha.pandey29@example.com", mobile: "9876543238" },
  { E_id: 130, name: "Priya Rao", email: "priya.rao30@example.com", mobile: "9876543239" },

  { E_id: 131, name: "Rahul Saxena", email: "rahul.saxena31@example.com", mobile: "9876543240" },
  { E_id: 132, name: "Amit Chatterjee", email: "amit.chatterjee32@example.com", mobile: "9876543241" },
  { E_id: 133, name: "Nitin Dubey", email: "nitin.dubey33@example.com", mobile: "9876543242" },
  { E_id: 134, name: "Suresh Yadav", email: "suresh.yadav34@example.com", mobile: "9876543243" },
  { E_id: 135, name: "Rakesh Jha", email: "rakesh.jha35@example.com", mobile: "9876543244" },
  { E_id: 136, name: "Lokesh Pawar", email: "lokesh.pawar36@example.com", mobile: "9876543245" },
  { E_id: 137, name: "Vikas More", email: "vikas.more37@example.com", mobile: "9876543246" },
  { E_id: 138, name: "Ajay Shinde", email: "ajay.shinde38@example.com", mobile: "9876543247" },
  { E_id: 139, name: "Sagar Patil", email: "sagar.patil39@example.com", mobile: "9876543248" },
  { E_id: 140, name: "Omkar Jadhav", email: "omkar.jadhav40@example.com", mobile: "9876543249" },

  { E_id: 141, name: "Neha Sharma", email: "neha.sharma41@example.com", mobile: "9876543250" },
  { E_id: 142, name: "Ritu Agarwal", email: "ritu.agarwal42@example.com", mobile: "9876543251" },
  { E_id: 143, name: "Payal Jain", email: "payal.jain43@example.com", mobile: "9876543252" },
  { E_id: 144, name: "Komal Das", email: "komal.das44@example.com", mobile: "9876543253" },
  { E_id: 145, name: "Shweta Nanda", email: "shweta.nanda45@example.com", mobile: "9876543254" },
  { E_id: 146, name: "Varun Kapoor", email: "varun.kapoor46@example.com", mobile: "9876543255" },
  { E_id: 147, name: "Rohan Bhatia", email: "rohan.bhatia47@example.com", mobile: "9876543256" },
  { E_id: 148, name: "Kartik Sehgal", email: "kartik.sehgal48@example.com", mobile: "9876543257" },
  { E_id: 149, name: "Mohit Arora", email: "mohit.arora49@example.com", mobile: "9876543258" },
  { E_id: 150, name: "Tanya Sethi", email: "tanya.sethi50@example.com", mobile: "9876543259" }
  ]);

  // for pagination formula 
  const indexOfLastRecord = currentpage * recordperpage;
  const indexOfFirstRecord = indexOfLastRecord - recordperpage;
  const currentRecords = record.slice(indexOfFirstRecord, indexOfLastRecord);
// for divide the page...
  const totalPages = Math.ceil(record.length / recordperpage);



  // for sorting.......
const [sortOrder, setSortOrder] = useState("asc");


  // const [Edit,setEdit]=useState(null);
  const [Edit,setEdit]=useState(null);

//    const handleEdit=(record)=>{
//     setEdit(record.E_id);
//     setE_id(record.E_id);
//     setName(record.name);
//     setEmail(record.email);
//     setMobile(record.mobile);
    const handleEdit = (record) => {
    setEdit(record.E_id);
    setE_id(record.E_id);
    setName(record.name);
    setEmail(record.email);
    setMobile(record.mobile);

    // navigate("/");
};
   
// for sorting in only in one function.......
    const handleSort=(field)=>{
      const sortedData=[...record].sort((a,b)=>{
        if (field === "name") {
        return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    if(field==="E_id"){
      return sortOrder==="asc"?
       a.E_id - b.E_id
      : b.E_id - a.E_id;
    }
      });
      setRecords(sortedData);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    }




    // this is handlesubmit function which include the all submit or update things.....
  const handleSubmit = (e) => {
    // e.preventDefault use because after click page or browser reloads automaticaly so it prevent
     e.preventDefault();
     if(Edit!==null){
       const updateRecord=record.map((item)=>item.E_id===Edit?{...item,name:name,email:email,mobile:mobile}:item)
       setRecords(updateRecord)
       setEdit(null);
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
    setRecords([...record, newRecord]);
    

    // after submitting all input fields become empty 
    setId("");
    setE_id("")
    setName("");
    setEmail("");
    setMobile("");
  

  

  };

//   it will handle the delete function with id
//   const handleDel = (id) => {

    const handleDel=(E_id)=>{

    // now we click on the id=2 for delete it will filter means check the every items and return only those item which match the conditions and keeps the updated record in new array 
    // const updateRecord = record.filter((item) => item.id !== id);

    // it will del based on E_id;
    const updateRecord=record.filter((item)=>item.E_id!==E_id)

    // table updates automatically
    setRecords(updateRecord);
};
  return (
    <>
      
      <BrowserRouter>
      <div className="flex gap-4 mb-4">
        <Link to="/"><button className='bg-blue-400 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-600 transition duration-200'>Form</button></Link>
        <Link/>
        <Link to="/table"><button className='bg-green-400 px-4 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition duration-200'>Table</button></Link>
      </div>
        <Routes>
            <Route path='/' element={
                <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Register</h1>
            
            <br />
            <label >Employee_ID<span>:</span>
            </label>
            <input type="number" placeholder="Enter Employee ID" 
            value={E_id}
            readOnly={Edit}
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
              {Edit !== null ? "Update" : "Submit"}</button>
          </form>
          </div>
          </div>
        
            } />

            <Route path='/table' element={
                <div>
                <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border">Sr.no</th>

                <th onClick={()=>handleSort("E_id")}
                className="p-2 border relative group cursor-pointer">
                  <div className="flex justify-center items-center gap-1">Employee_ID<span className="text-gray-600">
                      {sortOrder === "asc"}
                      </span></div>
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                      Click to sort {sortOrder === "asc" ? "ascending" : "descending"}
                        </div>
                        </th>

                <th onClick={()=>handleSort("name")}
                  className="p-2 border relative group cursor-pointer">
                    <div className="flex justify-center items-center gap-1">Name<span className="text-gray-600">
                      {sortOrder === "asc"}
                      </span></div>
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                      Click to sort {sortOrder === "asc" ? "ascending" : "descending"}
                        </div>
                      </th>
                <th className="p-2 border">
                  Email
                </th>
                <th className="p-2 border">Contact No</th>
                {/* <th>Delete</th> */}
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>

                {/* loop through all records map filter out the all data*/}
              {/* {record.map((data, index) => ( */}
              {currentRecords.map((data, index) => (
                <tr key={index}
                className="text-center hover:bg-gray-50">
                  {/* to provide sr.no  */}
                  <td className="p-2 border">{indexOfFirstRecord+ index + 1}</td>
                  <td className="p-2 border">{data.E_id}</td>
                  <td className="p-2 border">{data.name}</td>
                  <td className="p-2 border">{data.email}</td>
                  <td className="p-2 border">{data.mobile}</td>
                  <td>
                
                    {/* <button onClick={() => handleDel(data.id)}>Delete</button> */}

                    {/* here we use E_id for delete means it will dlt based on E_id */}
                    
                    <td><button onClick={() => handleDel(data.E_id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300">Delete</button>
                      </td>
                      <td><button onClick={()=>handleEdit(data)}
                      className="bg-gray-400 text-black px-3 py-1 rounded-lg hover:bg-gray-600 tarnsition duration-300 ml-2">Edit</button>
                      </td>
                    {/* <button onClick={edit?handleUpdate:handleSubmit}>{edit?"Edit":"Add"}</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-4 py-2 mx-1 mt-1.5 rounded-md text-sm font-medium transition duration-200
      ${
        currentpage === index + 1
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {index + 1}
    </button>
  ))}

          </div>
          

                 

  
            }/>
        </Routes>
      </BrowserRouter>
               
    </>
  )
}

export default Loginpage2
