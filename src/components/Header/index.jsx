import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";

import { TbLogout } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

const HeaderContainer = styled.header`
  width: 100%;
  height: 8.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonLogout = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const handleLogout = () => {
  signOut(auth);
};

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt={LogoImg} />
      <ButtonLogout onClick={handleLogout}>
        <TbLogout size={29} color="#864AF9" />
      </ButtonLogout>
    </HeaderContainer>
  );
};

export default Header;
