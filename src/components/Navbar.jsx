import { ShoppingCartOutlined, Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "@emotion/styled";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexWrap: "wrap" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "0" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "70px", fontSize: "12px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: "2" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "26px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "space-between", marginTop: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              placeholder="Chercher"
              aria-label="Saisir le produit recherché"
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to="/">BANANA DOG</Link></Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">NOUVEAU</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">CONNEXION</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
