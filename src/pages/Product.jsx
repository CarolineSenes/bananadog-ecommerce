import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { products } from "../data";

const Container = styled.div``;

const Wrapper = styled.section`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.label`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { id } = useParams();

  return (
    <Container>
      <Announcement />
      <Navbar />
      {products
        .filter((product) => product.id === Number(id))
        .map((product) => (
          <Wrapper key={product.id}>
            <ImgContainer>
              <Image src={product.img} alt={product.name} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.name}</Title>
              <Desc>{product.desciption}</Desc>
              <Price>{product.price}???</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Couleur</FilterTitle>
                  <FilterColor color="red" value="red" />
                  <FilterColor color="darkblue" value="marine" />
                  <FilterColor color="gray" value="gris" />
                </Filter>
                <Filter>
                  <FilterTitle htmlFor="filter_size">Taille</FilterTitle>
                  <FilterSize id="filter_size">
                    <FilterSizeOption value="XS">XS</FilterSizeOption>
                    <FilterSizeOption value="S">S</FilterSizeOption>
                    <FilterSizeOption value="M">M</FilterSizeOption>
                    <FilterSizeOption value="L">L</FilterSizeOption>
                    <FilterSizeOption value="XL">XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <Button>AJOUTER AU PANIER</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
        ))}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
