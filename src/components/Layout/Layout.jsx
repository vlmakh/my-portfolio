import styled from '@emotion/styled';
import { bg4000, bg1280, bg768 } from 'images';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: #12141d;  
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: linear-gradient(180deg, transparent 48%, #12141d),
    linear-gradient(180deg, rgba(18, 20, 29, 0.62), rgba(18, 20, 29, 0.62)),
    url(${bg768});
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    background-image: linear-gradient(180deg, transparent 48%, #12141d),
    linear-gradient(180deg, rgba(18, 20, 29, 0.62), rgba(18, 20, 29, 0.62)),
    url(${bg1280});
  }

  @media (min-width: 1281px) {
    background-image: linear-gradient(180deg, transparent 48%, #12141d),
    linear-gradient(180deg, rgba(18, 20, 29, 0.62), rgba(18, 20, 29, 0.62)),
    url(${bg4000});
  }
`;
