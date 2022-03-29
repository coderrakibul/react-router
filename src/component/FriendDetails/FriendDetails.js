import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const FriendDetails = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${params.friendId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>Hello bondhu : {params.friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>

        </div>
    );
};

export default FriendDetails;