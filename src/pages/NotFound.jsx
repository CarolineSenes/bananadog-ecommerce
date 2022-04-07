import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-direction: column;
  background-color: #f5fafd;
`;

const Title = styled.h1`
font-size: 50px;
text-align: center;
`

const Subtitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 50px 0;

`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
`;


const NotFound = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>404</Title>
        <Subtitle>oooops! cette page n'existe pas</Subtitle>
        <Button><Link to="/">Retour à l'Accueil</Link></Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
