import styled from '@emotion/styled';

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  /* background-color: ${p => p.theme.colors.bcgMain}; */
  box-shadow: ${p => p.theme.shadows.project};
  background-color: transparent;
  backdrop-filter: blur(8px);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[5]}px;
    outline: 1px solid lightgrey;
    padding-right: ${p => p.theme.space[5]}px;
  }

  &:nth-of-type(3n-2) {
    @media (min-width: 1280px) {
      margin-right: ${p => p.theme.space[7]}px;
    }
  }

  &:nth-of-type(3n-1) {
    @media (min-width: 1280px) {
      margin-left: ${p => p.theme.space[6]}px;
      margin-right: ${p => p.theme.space[6]}px;
    }
  }

  &:nth-of-type(3n) {
    @media (min-width: 1280px) {
      margin-left: ${p => p.theme.space[7]}px;
    }
  }
`;

export const ProjectImg = styled.img`
  width: 320px;
  
  @media (max-width: 360px) {
    max-width: 320px;
  }

  @media (max-width: 767.98px) {
    margin: 0 auto;
  }
`;

export const Description = styled.div`
  max-width: 480px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px 0;

  @media (max-width: 767.98px) {
    align-items: center;
  }

  @media (min-width: 1280px) {
    max-width: 720px;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const NameLink = styled.a`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 700;
  color: white;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
  }
`;

export const Chip = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.textMain};
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;
  color: white;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${p => p.theme.colors.textMain};
`;
