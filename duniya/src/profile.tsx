import React from 'react'
import './profile.css';
type ProfileProps = {name :string, age : number, bio : string};

const Profile : React.FC<ProfileProps> = ({name, age, bio})=>{
    return (
        <div className='Profile-card'>
            <h1>My name is :{name}</h1>
            <p>My age is :{age}</p>
            <p>My bio is :{bio}</p>
        </div>
    )
}

export default Profile;