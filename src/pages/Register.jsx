import styled from "@emotion/styled";
import { mobile } from "../responsive";


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
width: 40%;
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
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
${mobile({ fontSize: "12px" })}

`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`
const Button = styled.button`
text-transform: uppercase;
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Créer un nouveau compte</Title>
            <Form>
                <Input placeholder="Nom"/>
                <Input placeholder="Prénom"/>
                <Input placeholder="Email"/>
                <Input placeholder="Nom d'utilisateur"/>
                <Input placeholder="Mot de passe"/>
                <Input placeholder="Confirmation du mot de passe"/>
                <Agreement>En créant ce compte, je consent à transmettre mes données personnelles selon la politique de condidentialité.</Agreement>
                <Button>Créer</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register