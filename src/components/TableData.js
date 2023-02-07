import { useRef, useState} from "react"
import TableRowData from "./TableRowData"
import EditableTableRowData  from "./EditableTableRowData"



const TableData = ({filteredUsers,setFilteredUsers,FirstPageindex, LastPageindex,checkedUsers,setCheckedUsers}) =>{
    //Used to edit the state value
    const [isEdit, setIsEdit ]=useState("null")
   //use to update the newly edited data
    const [isEditForm,setIsEditForm] = useState({
      name:"",
      email:"",
      role:""
    })

    //maintain the pagination
    const UsersToBeDisplayed = filteredUsers.slice(FirstPageindex, LastPageindex)

    const handleClickEdit = (event,row) =>{
      event.preventDefault();
      setIsEdit(row.id)  

      const formNewValue = {
        name:row.name,
        email:row.email,
        role:row.role
      }
      setIsEditForm(formNewValue)
    }

    const handleEditFormDataChange = (event) =>{
      event.preventDefault();

      const fieldUsersName = event.target.getAttribute("name");
      const fieldNamesValue =  event.target.value;
      const UpdatedFormData = {...isEditForm}
      UpdatedFormData[fieldUsersName] = fieldNamesValue
      
      setIsEditForm(UpdatedFormData)
    } 

    const handleSubmitUpdatedForm = (event) =>{
      event.preventDefault()
      console.log(isEdit[1],"editnewid")
      const editedNewData = {
        id:isEdit,
        name:isEditForm.name,
        email:isEditForm.email,
        role:isEditForm.role

      }
      const newData = [...filteredUsers]

      const index = filteredUsers.findIndex((filterData) =>(filterData.id) === (isEdit))
      
      newData[index] = editedNewData
      setFilteredUsers(newData)
      setIsEdit("null")
    }

    
    const handleCancelClick = () => {
      setIsEdit("null")
    }



    const rowCheckBox = useRef("")
    const toggleCheckBoxes = (e) =>{

      if(e.target.className === 'All-users-selector'){
        setCheckedUsers([])
        if(e.target.checked){
        let checkedUsers = UsersToBeDisplayed.map((item)=>item.id)
        //console.log(checkedUsers)
        setCheckedUsers(checkedUsers)
        }
      } 
      else{
        if(e.target.checked){
          if(!checkedUsers.includes(e.target.id)){
            setCheckedUsers([...checkedUsers,e.target.id])
          }
        }
        else{
          if(checkedUsers.includes(e.target.id)){
            let newCheckedUsers = checkedUsers.filter((item) => item!==e.target.id)
            setCheckedUsers(newCheckedUsers)
          }
        }
      }
    }

return(
    <>
    <form onSubmit={handleSubmitUpdatedForm} id="formtable">  
    <table className="table">
        <tbody>
        <tr className="table-row">
          <th className="checkbox">
            <input type="checkbox" className="All-users-selector" checked={UsersToBeDisplayed.length === checkedUsers.length} onChange={toggleCheckBoxes}/>
          </th>
          <th align="center">Name </th>
          <th align="center">Email </th>
          <th align="center"> Role</th>
          <th align="center">Action</th>
        </tr>
        {UsersToBeDisplayed.map((row) => (
            <tr key={row.id} className="table-row">
                <th className="checkbox">
                  <input id={row.id} type="checkbox" ref={rowCheckBox} checked={checkedUsers.includes(row.id)?true:false} onChange={toggleCheckBoxes} />
                </th>
                {isEdit === (row.id) ? (
                <EditableTableRowData
                isEditForm={isEditForm}
                handleEditFormDataChange={handleEditFormDataChange}
                handleCancelClick={handleCancelClick}/>
                ) : ( 
                <TableRowData
                row ={row}
                filteredUsers ={filteredUsers}
                setFilteredUsers = {setFilteredUsers}
                handleClickEdit ={handleClickEdit} /> )}
            </tr>
        
          ))}
      </tbody>    
    </table>
    </form>
    </>
)
      
}

export default TableData;