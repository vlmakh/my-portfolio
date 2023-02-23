import styled from '@emotion/styled';
import { bg480, bg768, bg1280, bg2560 } from 'images';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: #12141d;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${bg480});
  }

  @media (min-width: 481px) and (max-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${bg768});
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${bg1280});
  }

  @media (min-width: 1281px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${bg2560});
  }
`;
