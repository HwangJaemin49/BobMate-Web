import styled from "styled-components"

export default function SaveButton() {
    SaveButton = styled.button`
        padding: 7px 10px; 
        border-radius: 10%;
        border: 1px black;
        background-color: #FFD900;
        margin-top: 5px;
        width: 120px;
        height: 40px;
    `
    return (
        <SaveButton>저장</SaveButton>
    )
}