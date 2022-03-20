import styled from "@emotion/styled";

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

const Link = styled.a`
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
          <Input placeholder="Nom d'utilisateur" />
          <Input placeholder="Mot de passe" />
          <Button>connexion</Button>
          <Link>J'ai oublié mon mot de passe.</Link>
          <Link>Créer un compte.</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
