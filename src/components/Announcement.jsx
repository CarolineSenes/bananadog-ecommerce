import styled from "@emotion/styled";

const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`


const Announcement = () => {
  return (
    <Container>OFFRE SPECIALE : -20% avec le code "OPEN2022"</Container>
  )
}

export default Announcement