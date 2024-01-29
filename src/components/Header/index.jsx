import React from 'react'
import { HeaderContainer } from './styles'
import LogoImg from "../../assets/logo.svg"
import { TbLogout } from "react-icons/tb";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt={LogoImg} />
      <TbLogout size={29} color='#864AF9'/>
    </HeaderContainer>
  )
}

export default Header