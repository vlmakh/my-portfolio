import {
  HeaderWrap,
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
import { FaReact, FaHtml5, FaSass, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo href="#">
        <Logo />
      </HeaderLogo>

      <Box>
        <HeaderName>Vlad Makhnenko</HeaderName>
        <Box display="flex" mt={3}>
          <HeaderPos>full-stack developer</HeaderPos>
          <LogoDiv>
            <FaHtml5 size="20" /> <FaSass size="20" />
            <SiJavascript size="20" />
            <SiTypescript size="20" />
            <FaReact size="20" />
            <SiRedux size="20" /> <FaNodeJs size="20" />
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
    </HeaderWrap>
  );
};
