import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical 
    align-items: center; // horizontal 
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
export const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
export const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    z-index: -1;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 5;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    src: url(https://www.tesla.com/model3/design#overview)
`
export const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
export const DownArrow = styled.img`
    color: black;
    height: 40px;
    animation: animateDown infinite 1.5s;

`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`