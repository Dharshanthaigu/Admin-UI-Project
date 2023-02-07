import { useEffect, useState } from "react";
import {FETCH_USER_DETAILS} from "./config"
//import Checkbox from "./Multiplecheckbox";
import TableData from "./TableData";
import PaginationAction from "./PaginationAction"
import {filterList} from "./FilterSearch"
import {Error} from "./Error"
import {rowchekcedremoved} from "./DeleteRow"
import Shimmer from "./Shimmer";




const Dashboard = () =>{
    const [searchUser,setSearchUser] = useState("")
    const [users,setUsers] = useState([])
    const [currentPage , setCurrentPage] = useState(1)
    const [recordsPage] = useState(10)
    const[filteredUsers, setFilteredUsers] = useState([])
    const[checkedUsers,setCheckedUsers] = useState([])

useEffect(() =>{
    getUsersDetails()
},[])

async function getUsersDetails(){
    const data = await fetch(FETCH_USER_DETAILS);
    const json = await data.json()
    setUsers(json)
    setFilteredUsers(json)
}


    const LastPageindex = currentPage * recordsPage
    const FirstPageindex = LastPageindex - recordsPage
    const no_of_Pages = Math.ceil(users.length/recordsPage)

    if(!users) {
        return <Error />
    }


return(
    (users.length===0)? <Shimmer />:(
        <div className="container" style={{justifyContent:"center"}}>
    <div>
        <div >
        <input className="search-input" style={{align:"center"}} type="text" name="userdetails" placeholder="search by field" onChange={(e)=>{setSearchUser(e.target.value)}} />
        <button  className="searchbutton" style={{padding:1,margin:10}}   onClick={()=>{
        const data = filterList(searchUser,setSearchUser,filteredUsers)
        setFilteredUsers(data)}}>
        Search
        </button>
    </div>
    <TableData 
    setSearchUser = {setSearchUser}
    filteredUsers={filteredUsers}
    FirstPageindex={FirstPageindex}
    LastPageindex ={LastPageindex}
    setFilteredUsers={setFilteredUsers}
    checkedUsers={checkedUsers}
    setCheckedUsers={setCheckedUsers}
    />
    <PaginationAction
        align="center"
        no_of_Pages={no_of_Pages}
        currentPage = {currentPage}
        setCurrentPage={setCurrentPage}
        setCheckedUsers={setCheckedUsers}
    />
    </div>
    <div>
        <button align="left" className="deletebutton" onClick={() =>{rowchekcedremoved(filteredUsers,setFilteredUsers,checkedUsers)}} >Delete <br/> {"SelectedItem:"} {checkedUsers.length}</button>
    </div> 
    </div>
    )
)
}

export default Dashboard;