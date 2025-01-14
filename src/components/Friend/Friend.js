import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, address,id } = props.friend;
    // const history = useHistory();
    // const handleclick = (id) => {
    //     const url = `/friend/${id}`;
    //     history.push(url);
    // }
    let url =`/friend/${id}`;
    const friendstyle = {
        border: '1px solid black',
        margin:'20px',
        padding: '20px',
        borderRadius:'20px',
        width:'400px',
       
        
    };
    return (
        <div style={friendstyle}>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Street: {address.street}</h2>
            <Link to={url}><button>Button</button></Link>
            {/* <button onClick={handleclick}></button> */}
        </div>
    );
};

export default Friend;