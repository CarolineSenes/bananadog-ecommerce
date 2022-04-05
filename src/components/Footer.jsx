import styled from "@emotion/styled";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;

`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}

`;

const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BANANA DOG</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos
          veniam cum quidem, corrupti deserunt eligendi! Eius rem iure commodi,
          adipisci libero omnis praesentium debitis impedit. Perferendis dolores
          reprehenderit veritatis!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem><Link to="/">Accueil</Link></ListItem>
          <ListItem><Link to="/cart">Panier</Link></ListItem>
          <ListItem>Catégorie Pulls</ListItem>
          <ListItem>Catégorie Veste</ListItem>
          <ListItem>Catégorie Tshirt</ListItem>
          <ListItem>Suivi de commande</ListItem>
          <ListItem>Articles favoris</ListItem>
          <ListItem>Mentions légales</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>18 rue des croquettes, 67356 OSVILLE</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/><a href="tel:0388559966">03 88 55 99 66</a></ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/><a href="mailto:contact@bananadog.fr">contact@bananadog.fr</a></ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
