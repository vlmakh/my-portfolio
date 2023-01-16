import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 767.98px) {
    max-width: 480px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
`;
