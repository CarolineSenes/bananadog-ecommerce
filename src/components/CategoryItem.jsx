import styled from "@emotion/styled";

const Container = styled.div`
margin: 3px;
position: relative;
`;

const Image = styled.img`
width:100%
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h2`
color: white;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
font-weight: 600;
cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return <Container>
      <Image src={item.img}/>
      <Info>
          <Title>{item.title}</Title>
          <Button>ACHETER</Button>
      </Info>
  </Container>;
};

export default CategoryItem;