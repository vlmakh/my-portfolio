import {
  HeaderWrap,
  HeaderCont,
  HeaderLogo,
  HeaderName,
  HeaderPos,
  LogoDiv,
  Nav,
  NavMobile,
  NavItem,
  NavLink,
} from './Header.styled';
import { Box } from 'components/Box/Box';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Logo } from 'components/Logo/Logo';
import { FaReact, FaHtml5, FaSass } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiWebpack } from 'react-icons/si';

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderCont>
        <HeaderLogo href="/#">
          <Logo fill="red" />
        </HeaderLogo>

        <Box>
          <HeaderName>Vlad Makhnenko</HeaderName>
          <Box display="flex">
            <HeaderPos>full-stack developer</HeaderPos>
            <LogoDiv>
              <FaReact size="20" />
              <SiRedux size="20" /> <SiWebpack size="20" />
              <FaHtml5 size="20" /> <FaSass size="20" />
              <SiJavascript size="20" />
            </LogoDiv>
          </Box>
        </Box>

        <Nav>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/vlad-makhnenko/"
              target="blank"
              aria-label="Linkedin"
            >
              <BsLinkedin />
              Linkedin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/vlmakh"
              target="blank"
              aria-label="Github"
            >
              <BsGithub />
              Github
            </NavLink>
          </NavItem>
        </Nav>

        <NavMobile>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/vlad-makhnenko/"
              target="blank"
              aria-label="Linkedin"
            >
              <BsLinkedin size="24" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/vlmakh"
              target="blank"
              aria-label="Github"
            >
              <BsGithub size="24" />
            </NavLink>
          </NavItem>
        </NavMobile>
      </HeaderCont>
    </HeaderWrap>
  );
};
