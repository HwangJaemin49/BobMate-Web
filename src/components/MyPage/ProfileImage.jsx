import React from "react";
import ProfileIcon from '../images/person-icon.png';
import styled from 'styled-components';


const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #E9E9E9;
    overflow: hidden;
    background-size: cover;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`

export default function ProfileImage() {
    return (
        <ProfileImg src={ProfileIcon} alt='Profile' />
    )
}
