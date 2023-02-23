import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';

export const FooterWrap = styled.footer`
  font-weight: 700;
  color: ${p => p.theme.colors.textMain};
  width: 100%;
  border-top: 1px solid lightgrey;  
  background-color: transparent;
  backdrop-filter: blur(2px);
`;

export const FooterCont = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const FooterLink = styled.a`
text-decoration: none;
  color: white;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
   
  }
`;