import React from 'react';
import UserProfileEdit from './UserProfileEdit';


export default function ProfileEditPage() {
    return (
        <div className='profilepage-container' style={{height:'100%', width: '100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <UserProfileEdit />
        </div>
    );
}