import styled from "@emotion/styled";
import { products } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  return (
    <Container>
      {products.map((item, index) => (
        <div key={index}>
          <Link to={`/product/${item.id}`} key={index}>
            <Product item={item} key={item.id} />
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Products;
