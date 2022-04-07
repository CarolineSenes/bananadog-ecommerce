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

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.label`
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
      <Title>Tous les articles</Title>
      <FilterContainer>
        <Filter>
          <FilterText htmlFor="filter">Filtre :</FilterText>
          <Select id="filter">
            <Option disabled selected value="">
              Couleur
            </Option>
            <Option value="Noir">Noir</Option>
            <Option value="Jaune">Jaune</Option>
            <Option value="Rouge">Rouge</Option>
            <Option value="Vert">Vert</Option>
            <Option value="Rose">Rose</Option>
            <Option value="Blanc">Blanc</Option>
          </Select>
          <Select id="filter">
            <Option disabled selected>
              Taille
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText htmlFor="sort">Tri :</FilterText>
          <Select id="sort">
            <Option selected value="">
              Nouveautés
            </Option>
            <Option value="croissant">Prix croissant</Option>
            <Option value="décroissant">Prix décroissant</Option>
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
