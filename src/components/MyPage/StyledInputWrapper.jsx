import styled from "styled-components"

const StyledInput = styled.input`
        padding: 6px;
        font-size: 15px;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: white;
        color: gray;
        &::placeholder {
            text-align: center;
        }
        width: ${(props) => props.style.width || 'auto'}; // 여기에 width 추가
        ${(props) =>
            props.isCentered &&
            `
            &::placeholder {
                text-align: center;
            }
        `}
        `;
export default function StyledInputWrapper(props) {
    console.log("isCentered prop:", props.isCentered);
    return <StyledInput placeholder={props.placeholder}
    style={props.style} />;
}