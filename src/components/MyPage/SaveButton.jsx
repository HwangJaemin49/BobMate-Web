import styled from "styled-components"

export default function SaveButton() {
    SaveButton = styled.button`
        padding: 7px 10px; 
        border-radius: 10%;
        border: 1px, black;
        background-color: white;
        margin-top: 5px;
    } 
    `
    return (
        <SaveButton>저장</SaveButton>
    )
}