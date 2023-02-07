import { rowremoved } from "./DeleteRow"
const TableRowData = ({row, filteredUsers,setFilteredUsers,handleClickEdit}) =>{

    return(
        <>
             <td align="center">{row.name}</td>
                <td align="center">{row.email}</td>
                <td align="center">{row.role}</td>
                <td align="center" className="btn">
                    <button  onClick={() =>{rowremoved(row.id,filteredUsers,setFilteredUsers)}} ><img src="icons8-delete-24.png" alt="Delete-button" /></button>
                    <button onClick={(event) =>{handleClickEdit(event,row)}} ><img src="icons8-edit-24.png" alt="Edit-button" /></button>
                </td>
        </>
    )
}

export default TableRowData;