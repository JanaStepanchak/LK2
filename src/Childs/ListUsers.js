import React from 'react';
import Button  from './Button';


const ListUsers = ({user, interviewed})=> {
 //   console.log("ListUsers", interviewed)
        return ( 
            <table border ={1}>
                <tr>
                    <th colspan={"2"}>{user.name}</th>
                    <th> 
                    <Button onClick={interviewed}/>
                    </th>
                </tr>
                <tr>
                    <td>{user.phone}</td>                    
                    <td>{user.email}</td>
                    <td>{user.company}</td>
                </tr>
                <tr>
                    <td colspan={"3"}>{user.about}</td>                    
                </tr>

            {/* <button onClick={console.log("123")}>
                interviewed
            </button> */}

            </table>
        )
}

ListUsers.defaultProps = {
    user: {
        name: false,
        company: "Test",
        email: "Test",
        about: ""
    }
}

export default ListUsers;


