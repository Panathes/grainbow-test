import styled from "styled-components"

export const Wrapper = styled.div`
    margin-top: 60px;
`

export const Reimburse = styled.p<{ isDone: string }>`
    color: ${props => props.isDone === 'Oui' ? '#87ff65' : '#ff1b1c'}
`;

export const Button = styled.button`
    margin-left: 5px;
`