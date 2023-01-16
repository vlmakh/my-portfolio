import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';

export const GalleryCont = styled(Container)`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px 0;
`;
