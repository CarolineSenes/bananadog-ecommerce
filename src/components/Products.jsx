import styled from "@emotion/styled";
import {products} from '../data'
import Product from './Product'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Products = () => {
  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products