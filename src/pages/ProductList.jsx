import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0" })}

`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Pull</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtre :</FilterText>
          <Select>
            <Option disabled selected>
              Couleur
            </Option>
            <Option>Noir</Option>
            <Option>Jaune</Option>
            <Option>Rouge</Option>
            <Option>Vert</Option>
            <Option>Rose</Option>
            <Option>Blanc</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Tri :</FilterText>
          <Select>
            <Option selected>
              Nouveautés
            </Option>
            <Option>Prix croissant</Option>
            <Option>Prix décroissant</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
