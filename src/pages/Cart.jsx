import styled from "@emotion/styled";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove, Topic } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 20px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const ProductDetails = styled.div`
flex:2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: .5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h2`
text-transform: uppercase;
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};

`;


const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
text-transform: uppercase;
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>votre panier</Title>
        <Top>
          <TopButton>continuer le shopping</TopButton>
          <TopTexts>
              <TopText>Panier (2)</TopText>
              <TopText>Liste des souhaits (0)</TopText>
          </TopTexts>
          <TopButton type="filled">paiement</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="/assets/h2.jpg"/>
                        <Details>
                            <ProductName><b>Article :</b> Pull</ProductName>
                            <ProductId><b>ID :</b> 15464456</ProductId>
                            <ProductColor color="yellow" />
                            <ProductSize><b>Taille :</b> S</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>30€</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="/assets/h3.jpg"/>
                        <Details>
                            <ProductName><b>Article :</b> Veste</ProductName>
                            <ProductId><b>ID :</b> 4798774</ProductId>
                            <ProductColor color="green" />
                            <ProductSize><b>Taille :</b> S</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>45€</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>montant du panier</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Sous-total</SummaryItemText>
                    <SummaryItemPrice>75€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Frais de livraison</SummaryItemText>
                    <SummaryItemPrice>5€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Offre frais de livraison</SummaryItemText>
                    <SummaryItemPrice>-5€</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>75€</SummaryItemPrice>
                </SummaryItem>
                <Button>payer</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
