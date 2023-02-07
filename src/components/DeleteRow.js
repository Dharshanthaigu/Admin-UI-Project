
export const rowremoved = (selectedrow,filteredUsers,setFilteredUsers) =>{
        const rowremoved = filteredUsers.filter((remove) =>{
            return remove.id !== selectedrow
        })
        setFilteredUsers(rowremoved)
        return rowremoved;
}

export const rowchekcedremoved = (filteredUsers,setFilteredUsers,checkedUsers) =>{
        const rowchekcedremoved = filteredUsers.filter((remove) =>{
            return (!checkedUsers.includes(remove.id))})
        setFilteredUsers(rowchekcedremoved)
        return rowchekcedremoved;
}

