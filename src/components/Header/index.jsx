import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import { TbLogout } from "react-icons/tb";

const HeaderContainer = styled.header`
  width: 100%;
  height: 8.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt={LogoImg} />
      <TbLogout size={29} color="#864AF9" />
    </HeaderContainer>
  );
};

export default Header;
