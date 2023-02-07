export function filterList(searchUser,setSearchUser,filteredUsers){
    const filterList = filteredUsers.filter((check)=>{
        if(setSearchUser === "") return check
            else if(
                check.name.toLowerCase().includes(searchUser.toLowerCase()) ||
                check.email.toLowerCase().includes(searchUser.toLowerCase()) ||
                check.role.toLowerCase().includes(searchUser.toLowerCase())
            ){
              return check;
            }
    })
    return filterList;
}
