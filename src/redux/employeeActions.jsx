export const Add_Employee="Add_Employee"
export const Delete_Employee="Delete_Employee"
export const Update_Employee="Update_Employee"
export const Set_Search="Set_Search"
export const Set_Page="Set_Page"
export const Set_Sort="Set_Sort"
export const Set_Employees="Set_Employees"
export const Set_Show_All_Pages="Set_Show_All_Pages"

export const setEmployees=(data)=>({
    type:"Set_Employees",
    payload:data
})


export const addemployee=(employee)=>({
    type:"Add_Employee",
    payload:employee
});
export const deleteemployee=(id)=>({
    type:"Delete_Employee",
    payload:id
})
export const updateemployee=(employee)=>({
    type:"Update_Employee",
    payload:employee
})
export const Set_Search1=(search)=>({
    type:"Set_Search",
    payload:search
})
export const Setpage=(page)=>({
    type:"Set_Page",
    payload:page
})
export const Set_Sort1=(field)=>({
    type:"Set_Sort",
    payload:field
})

export const set_showallpages=()=>{
    return{
        type:"Set_Show_All_Pages"
    }
}