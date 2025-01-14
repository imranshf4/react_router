import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    let { id } = useParams();
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);
    return (
        <div>
            <h1>{friends.name}</h1>
        </div>
    );
};

export default FriendDetails;