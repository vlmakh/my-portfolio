import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';

export const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  z-index: 100;
  background-color: transparent;
  box-shadow: ${p => p.theme.shadows.inner};
  backdrop-filter: blur(8px);
`;

export const HeaderCont = styled(Container)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textMain};
  margin-left: ${p => p.theme.space[3]}px;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const HeaderLogo = styled.a`
  color: white;

  transition: filter 300ms ease-in;

  :hover {
    filter: drop-shadow(0 0 20px #2e5cff);
  }
`;

export const HeaderName = styled.h1`
  color: ${p => p.theme.colors.textMain};

  @media (max-width: 767.98px) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const HeaderPos = styled.p`
  color: ${p => p.theme.colors.textMain};
`;

export const Nav = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  gap: ${p => p.theme.space[4]}px;
  margin-left: auto;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const NavMobile = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  gap: ${p => p.theme.space[4]}px;
  margin-left: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: white;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  font-weight: 700;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
  }
`;
