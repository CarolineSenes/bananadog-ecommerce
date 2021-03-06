import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import { mobile } from "../responsive";


const Container = styled.section`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}

`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Soyez prévenu de l'arrivée de nouveaux produits.</Desc>
      <InputContainer>
        <Input placeholder="Email" aria-label="Saisir votre adresse email"></Input>
        <Button aria-label="Envoyer">
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
