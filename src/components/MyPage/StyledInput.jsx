import styled from "styled-components"

export default function StyledInput() {
    StyledInput = styled.input`
        padding: 6px;
        font-size: 15px;
        border-radius: 8%;
        border: 0.5px, gray;
        background-color: white;
        color: gray;
        placeholder: ${(props) =>props.placeholder}
    `
    return (
        <StyledInput />
    )
}