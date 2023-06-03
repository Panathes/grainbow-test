import styled from "styled-components"

export const Wrapper = styled.div`
    margin-top: 60px;
`

export const Reimburse = styled.p<{ isDone: boolean }>`
    color: ${props => props.isDone === true ? '#ff1b1c' : '#87ff65'}
`;