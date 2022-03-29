import React from 'react';
import {useNavigate} from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h3>{name}</h3>
          <CustomLink to={'/friend/' + id}>Show Detail</CustomLink>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;