import React from 'react';
//import Button  from './Button';


const ListUsers = ({user, interviewed})=> {
 //   console.log("ListUsers", interviewed)
        return ( 
            <div >
                <h4>Hello,  {user.name}</h4>
                <div>{user.company}</div>
                <p>{ user.email } </p>

            {/* <button onClick={console.log("123")}>
                interviewed
            </button> */}
            </div>
        )
}

ListUsers.defaultProps = {
    user: {
        name: false,
        company: "Test",
        email: "Test"
    }
}

export default ListUsers;


