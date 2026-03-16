import React, { useState,useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteemployee,Set_Search1, Set_Sort1,setEmployees,Setpage, updateemployee , set_showallpages} from "../redux/employeeActions";
// import { EmployeeContext } from "./EmployeeContext";
// import { useDispatch, useSelector } from "react-redux";
// get the data from app.jsx like props..........
function EmployeeTable(
  // record,
  // setRecords,
  // handleDelete,
  // handleEdit,
  // currentRecords,
  // currentpage,
  // setCurrentPage,
  // totalPages,
  // indexOfFirstRecord,
  // search,
  // setSearch,
  

  // recordsData,actions,pagination,searchprops
) 

{
  const record=useSelector((state)=>state.record);
  const search=useSelector((state)=>state.search);
  const currentpage=useSelector((state)=>state.currentpage)

  // const {sortfield,sortOrder}=useSelector((state)=>state.employee)
  const sortfield=useSelector((state)=>state.sortfield)
  const sortOrder=useSelector((state)=>state.sortOrder)
  
  // for API........................................
  const total=useSelector((state)=>state.total)
  const showallpages=useSelector((state)=>state.showallpages)
  const recordperpage=10;
  // 
  // const totalPages = Math.ceil((total || 0) / recordperpage);
  const totalPages = Math.ceil(total / recordperpage);
  const pagesToShow=showallpages? totalPages:Math.min(5,totalPages)
  const dispatch=useDispatch();
  
  // for pagination we have to use total from api response because we are getting total from api response and we will use it for pagination.........
  // for API........................................
  useEffect(()=>{
    const getEmployees=async()=>{
    const skip=(currentpage-1)*recordperpage
    try{
        const response=await fetch(`https://dummyjson.com/users/search?q=${search}&limit=${recordperpage}&skip=${skip}`);
        const data=await response.json();
        // here we have to format the data because our data structure is different from the API data structure so we have to format it according to our data structure.........
        const formattedData=data.users.map(item=>({
          E_id: item.id,
          name: item.firstName + " " + item.lastName,
          email: item.email,
          mobile: item.phone
        }))
        // console.log(data);
        dispatch(setEmployees({
          users:formattedData,
          total:data.total}
        ))
      }catch(error){
        console.error("Error fetching employees:", error);
      }
  }
  getEmployees();
},[currentpage,search])


// for redux portion .........................................................
// const [search, setSearch] = useState("");
    // const filteredRecords=useMemo(()=>{
    //   return record.filter((item)=>
    //   item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
    //   // here we provide dependcies array for it will render only when [record,search] change...
    // item.email.toLowerCase().includes(search.toLowerCase()))},[record,search]
    // )

    // const currentRecords=record

    // const [currentpage, setCurrentPage] = useState(1);
    
    
    
    // here we use context api for better optimization......
    // instead of get the data from the fuction we can access the data by context api......
    // get the data and put into useContext(EmployeeContext);
    // const {
      //   record,
      //   setRecords,
      //   handleDelete,
      //   handleEdit,
      //   currentRecords,
      //   currentpage,
      //   setCurrentPage,
      //   totalPages,
      //   indexOfFirstRecord,
      //   search,
      //   setSearch
      // } = useContext(EmployeeContext);
      // const {record,setRecords}=recordsData;
      // const {handleDelete,handleEdit}=actions;
      // const {currentRecords,currentpage,setCurrentPage,totalPages,indexOfFirstRecord}=pagination;
      // const {search,setSearch}=searchprops;
      
      
      // use for navigation/redirect to the page 
      const navigate = useNavigate();
      
      // for search on button click
      const [searchInput, setSearchInput] = useState("");
      // const handleSearch = () => {
        // setSearch(searchInput);
        // by redux...................
        // dispatch(Set_Search(Set_Search))
        // };
        
        // for sorting
        // const [sortOrder, setSortOrder] = useState("asc");
        
        // const handleSort = (field) => {
//           console.log("record:", record);
// console.log("type:", typeof record);
          
          const sortData = [...record].sort((a, b) => {
            
            if (sortfield === "name") {
              return sortOrder === "asc" 
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
            }
            
            if (sortfield === "E_id") {
              return sortOrder === "asc"
              ? a.E_id - b.E_id
              : b.E_id - a.E_id;
            }
            
            return 0;
          }
        );
        // pagination logic
        // const recordperpage = 10;
          const indexOfLastRecord = currentpage * recordperpage;
          const indexOfFirstRecord = indexOfLastRecord - recordperpage;
          // filterRecords is for filter
        //   const currentRecords = sortData.slice(
        //   indexOfFirstRecord,
        //   indexOfLastRecord
        // );
          const currentRecords = sortData
      
        // const totalPages = Math.ceil(filteredRecords.length / recordperpage);
        // const totalPages = Math.ceil(sortData.length / recordperpage);

        // for API we have to use total from api response for pagination because we are getting total from api response and we will use it for pagination.........
        // const totalPages = Math.ceil(total / recordperpage);

    // setRecords(sortedData);
    // dispatch(record(sortedData))
    // setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  ;
  // console.log("Sort Field:", sortfield);
  // console.log("Sort Order:", sortOrder);

  return (

     
    <div>
      {/* for search input field.......... */}
        <div className="flex justify-between items-center mb-4">

      {/* Search Box */}
      <div className="flex items-center gap-2">
    
      <input
      type="text"
      placeholder="Search by name or email"
      // here we have to write down the {searchInput} if not user can't type 
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
    onClick={()=>dispatch(Set_Search1(searchInput))}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
      Search
    </button>
    </div>
    </div>

        


{/* table content......... */}
      <div className="overflow-x-visible">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-blue-100">

              <th className="p-2 border">Sr.no</th>

              <th onClick={()=>
              {
                
                dispatch(Set_Sort1("E_id"))
              }
              
            }
                className="p-2 border relative group cursor-pointer">
                  <div className="flex justify-center items-center gap-1">Employee_ID<span className="text-gray-600">
                      {sortOrder === "asc"}
                      </span></div>
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                      Click to sort {sortOrder === "asc" ? "ascending" : "descending"}
                        </div>
                        </th>

            <th onClick={()=>dispatch(Set_Sort1("name"))}
                  className="p-2 border relative group cursor-pointer">
                    <div className="flex justify-center items-center gap-1">Name<span className="text-gray-600">
                      {sortOrder === "asc"}
                      </span></div>
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                      Click to sort {sortOrder === "asc" ? "ascending" : "descending"}
                        </div>
                      </th>

                      

              <th className="p-1 border">Email</th>
              <th className="p-1 border">Contact No</th>
              <th className="p-1 border">Actions</th>

            </tr>
          </thead>

          <tbody>

            {/* {Array.isArray(currentRecords) && currentRecords.map((data, index) => ( */}
            {Array.isArray(currentRecords) && currentRecords.map((data, index) => (

              <tr
                key={index}
                className="text-center hover:bg-gray-50"
              >

                <td className="p-2 border">
                  {indexOfFirstRecord + index + 1}
                </td>

                <td className="p-1 border">{data.E_id}</td>
                <td className="p-1 border text-left">{data.name}</td>
                <td className="p-1 border text-left">{data.email}</td>
                <td className="p-1 border text-left">{data.mobile}</td>

                <td className="p-2 border">

                  <button
                    // onClick={() => handleDelete(data.E_id)}
                    onClick={()=>dispatch(deleteemployee(data.E_id))}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>

                 <button
                //  here should be data inside handleEdit
                // onClick={() => {handleEdit(data)
                // for redux.............
                onClick={() => {dispatch(updateemployee(data))
                  // for redirect on form page when we click edit.......... 
                  // and also it is for dynamic url() for every id change
                  navigate(`/edit/${data.E_id}`);
                }}
                className="bg-gray-400 text-black px-3 py-1 rounded-lg hover:bg-gray-600 transition duration-300 ml-2"
                >
                Edit
                </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* Pagination */}

        <div className="mt-3">

          {Array.from({ length: pagesToShow }, (_, index) => (

            <button
              key={index}
              // onClick={() => setCurrentPage(index + 1)}
              onClick={()=> dispatch(Setpage(index+1))}
              className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition
              ${currentpage === index + 1
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {index + 1}
            </button>

          ))}
          {totalPages>5 && (
            <button onClick={()=>dispatch(set_showallpages())}
            className="px-4 py-2 mx-1 bg-gray-500 text-white rounded-md">
              {showallpages ? "Less" : "More"} 
              
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default EmployeeTable;