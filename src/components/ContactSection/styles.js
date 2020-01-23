import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledContactSection = styled(Section)(({ theme }) => css`
  width: 100%;

  h1 {
    border-bottom: 1px solid ${theme.dark};
    width: 100%;
    text-align: center;
  }

  p {
    margin: 40px 0;
    max-width: 500px;
    text-align: center;
    line-height: 24px; 
  }
`);