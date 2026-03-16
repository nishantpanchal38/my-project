import { Add_Employee, Delete_Employee, Set_Search, Set_Page, Update_Employee, Set_Sort,Set_Employees} from "./employeeActions"

const initialState={
//     record:[
//         { E_id: 101, name: "Aarav Sharma", email: "aarav.sharma1@example.com", mobile: "9876543210" },
//   { E_id: 102, name: "Vivaan Patel", email: "vivaan.patel2@example.com", mobile: "9876543211" },
//   { E_id: 103, name: "Aditya Verma", email: "aditya.verma3@example.com", mobile: "9876543212" },
//   { E_id: 104, name: "Vihaan Gupta", email: "vihaan.gupta4@example.com", mobile: "9876543213" },
//   { E_id: 105, name: "Arjun Singh", email: "arjun.singh5@example.com", mobile: "9876543214" },
//   { E_id: 106, name: "Sai Kumar", email: "sai.kumar6@example.com", mobile: "9876543215" },
//   { E_id: 107, name: "Reyansh Shah", email: "reyansh.shah7@example.com", mobile: "9876543216" },
//   { E_id: 108, name: "Krishna Iyer", email: "krishna.iyer8@example.com", mobile: "9876543217" },
//   { E_id: 109, name: "Ishaan Mehta", email: "ishaan.mehta9@example.com", mobile: "9876543218" },
//   { E_id: 110, name: "Rudra Nair", email: "rudra.nair10@example.com", mobile: "9876543219" },

//   { E_id: 111, name: "Anaya Joshi", email: "anaya.joshi11@example.com", mobile: "9876543220" },
//   { E_id: 112, name: "Diya Reddy", email: "diya.reddy12@example.com", mobile: "9876543221" },
//   { E_id: 113, name: "Aadhya Kulkarni", email: "aadhya.kulkarni13@example.com", mobile: "9876543222" },
//   { E_id: 114, name: "Myra Desai", email: "myra.desai14@example.com", mobile: "9876543223" },
//   { E_id: 115, name: "Sara Kapoor", email: "sara.kapoor15@example.com", mobile: "9876543224" },
//   { E_id: 116, name: "Ira Malhotra", email: "ira.malhotra16@example.com", mobile: "9876543225" },
//   { E_id: 117, name: "Saanvi Choudhary", email: "saanvi.choudhary17@example.com", mobile: "9876543226" },
//   { E_id: 118, name: "Riya Bansal", email: "riya.bansal18@example.com", mobile: "9876543227" },
//   { E_id: 119, name: "Kavya Menon", email: "kavya.menon19@example.com", mobile: "9876543228" },
//   { E_id: 120, name: "Meera Pillai", email: "meera.pillai20@example.com", mobile: "9876543229" },

//   { E_id: 121, name: "Dev Mishra", email: "dev.mishra21@example.com", mobile: "9876543230" },
//   { E_id: 122, name: "Yash Thakur", email: "yash.thakur22@example.com", mobile: "9876543231" },
//   { E_id: 123, name: "Harsh Agrawal", email: "harsh.agrawal23@example.com", mobile: "9876543232" },
//   { E_id: 124, name: "Kunal Arora", email: "kunal.arora24@example.com", mobile: "9876543233" },
//   { E_id: 125, name: "Manav Sinha", email: "manav.sinha25@example.com", mobile: "9876543234" },
//   { E_id: 126, name: "Tanvi Bhatt", email: "tanvi.bhatt26@example.com", mobile: "9876543235" },
//   { E_id: 127, name: "Sneha Tiwari", email: "sneha.tiwari27@example.com", mobile: "9876543236" },
//   { E_id: 128, name: "Pooja Yadav", email: "pooja.yadav28@example.com", mobile: "9876543237" },
//   { E_id: 129, name: "Nisha Pandey", email: "nisha.pandey29@example.com", mobile: "9876543238" },
//   { E_id: 130, name: "Priya Rao", email: "priya.rao30@example.com", mobile: "9876543239" },

//   { E_id: 131, name: "Rahul Saxena", email: "rahul.saxena31@example.com", mobile: "9876543240" },
//   { E_id: 132, name: "Amit Chatterjee", email: "amit.chatterjee32@example.com", mobile: "9876543241" },
//   { E_id: 133, name: "Nitin Dubey", email: "nitin.dubey33@example.com", mobile: "9876543242" },
//   { E_id: 134, name: "Suresh Yadav", email: "suresh.yadav34@example.com", mobile: "9876543243" },
//   { E_id: 135, name: "Rakesh Jha", email: "rakesh.jha35@example.com", mobile: "9876543244" },
//   { E_id: 136, name: "Lokesh Pawar", email: "lokesh.pawar36@example.com", mobile: "9876543245" },
//   { E_id: 137, name: "Vikas More", email: "vikas.more37@example.com", mobile: "9876543246" },
//   { E_id: 138, name: "Ajay Shinde", email: "ajay.shinde38@example.com", mobile: "9876543247" },
//   { E_id: 139, name: "Sagar Patil", email: "sagar.patil39@example.com", mobile: "9876543248" },
//   { E_id: 140, name: "Omkar Jadhav", email: "omkar.jadhav40@example.com", mobile: "9876543249" },

//   { E_id: 141, name: "Neha Sharma", email: "neha.sharma41@example.com", mobile: "9876543250" },
//   { E_id: 142, name: "Ritu Agarwal", email: "ritu.agarwal42@example.com", mobile: "9876543251" },
//   { E_id: 143, name: "Payal Jain", email: "payal.jain43@example.com", mobile: "9876543252" },
//   { E_id: 144, name: "Komal Das", email: "komal.das44@example.com", mobile: "9876543253" },
//   { E_id: 145, name: "Shweta Nanda", email: "shweta.nanda45@example.com", mobile: "9876543254" },
//   { E_id: 146, name: "Varun Kapoor", email: "varun.kapoor46@example.com", mobile: "9876543255" },
//   { E_id: 147, name: "Rohan Bhatia", email: "rohan.bhatia47@example.com", mobile: "9876543256" },
//   { E_id: 148, name: "Kartik Sehgal", email: "kartik.sehgal48@example.com", mobile: "9876543257" },
//   { E_id: 150, name: "Mohit Arora", email: "mohit.arora49@example.com", mobile: "9876543258" },
//   { E_id: 149, name: "Tanya Sethi", email: "tanya.sethi50@example.com", mobile: "9876543259" }
//     ],
    record:[],
    search:"",
    currentpage:1,
    sortfield:"",
    sortOrder:"asc"
}
const employeeReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case Set_Employees:
            return{
                ...state,record:actions.payload
            }
        case Add_Employee:
            return{
                ...state,record:[...state.record,actions.payload]
            }
        case Delete_Employee:
            return{
                ...state,record:state.record.filter(item=>item.E_id!==actions.payload)
            }
        case Update_Employee:
            return{
                ...state,record:state.record.map(item=>item.E_id===actions.payload.E_id ? actions.payload:item)
            }
        case Set_Search:
            return{
                ...state,search:actions.payload
            }
        case Set_Page:
            return{
                ...state,currentpage:actions.payload
            }

        case Set_Sort:
            let order=state.sortOrder;

            if (state.sortfield===actions.payload){
                order=state.sortOrder==="asc"?"desc":"asc";
            }
            return{
                ...state,
                sortfield:actions.payload,
                sortOrder:order
            };
        default:
            return state
    }
}
export default employeeReducer 