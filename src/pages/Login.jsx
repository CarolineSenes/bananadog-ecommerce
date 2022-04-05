import styled from "@emotion/styled";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/assets/h1.jpg) center;
background-size: cover;
display: flex;align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({ width: "80%" })}

`

const Title = styled.h1`
text-transform: uppercase;
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
margin: 10px 0;
padding: 10px;
${mobile({ fontSize: "12px" })}

`

const Button = styled.button`
text-transform: uppercase;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`

const ForgotPass = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>se connecter</Title>
        <Form>
          <Input placeholder="Nom d'utilisateur" aria-label="Saisir votre nom d'utilisateur"/>
          <Input placeholder="Mot de passe" aria-label="Saisir votre mot de passe"/>
          <Button>connexion</Button>
          <ForgotPass href="#">J'ai oublié mon mot de passe.</ForgotPass>
          <Link to="/register">Créer un compte.</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
