
const EditableTableRowData = ({isEditForm,handleEditFormDataChange,handleCancelClick}) =>{

    return(
        <>
            <td align="center">
                <input type="text"
                required="required" 
                placeholder="Enter a name" 
                name="name" 
                value={isEditForm.name}
                onChange={handleEditFormDataChange}/>
            </td>
            <td align="center">
                <input type="email"
                required="required" 
                placeholder="Enter a Email" 
                name="email" 
                value={isEditForm.email}
                onChange={handleEditFormDataChange}/>
            </td>
            <td align="center">
                <input type="text" 
                required="required" 
                placeholder="Enter a Role" 
                name="role" 
                value={isEditForm.role}
                onChange={handleEditFormDataChange}/>
            </td>
            <td align="center" className="editbtn">
                <button align="left" className="savebtn"  type="submit">Save</button>
                <button align="right" className="cancelbtn" onClick={handleCancelClick}>Cancel</button>
            </td> 
        </>
    )
}

export default EditableTableRowData;