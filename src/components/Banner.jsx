import styled from "@emotion/styled";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  ${mobile({ display: "none" })}

`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Card = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props)=> props.bg}
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.p`
  font-size: 70px;
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Card bg="f5fafd">
          <ImgContainer>
            <Image src="/assets/v2.jpg" alt=""/>
          </ImgContainer>
          <InfoContainer>
            <Title>STREET STYLE</Title>
            <Desc>NOUVELLE COLLECTION</Desc>
            <Button><Link to="products">ACHETER</Link></Button>
          </InfoContainer>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Banner;
