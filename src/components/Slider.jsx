import styled from "@emotion/styled";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: sandybrown;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
border-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`

function Slider() {
  return (
    <Container>
      <Arrow>
        <ArrowLeft />
      </Arrow>
      <Arrow>
        <ArrowRight />
      </Arrow>
    </Container>
  );
}

export default Slider;
