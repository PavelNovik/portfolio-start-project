import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const Button = styled.div`
  margin-left: 10px;
  input {
    display: none;
  }

  max-width: 4rem;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7,
      -0.2rem -0.2rem 0.5rem #FFFFFF;
    background: rgba(255, 255, 255, 0);
    position: relative;
    cursor: pointer;
    border-radius: 1.6rem;

    &::after {
      content: "";
      position: absolute;
      left: .4rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: ${Theme.colors.mainBackground};
      transition: all 0.4s ease;
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: inherit;
      //background: linear-gradient(330deg, #5b0eeb 0%, #6d5dfc 50%, #8abdff 100%);
      background: ${Theme.colors.accentGradient};
      opacity: 0;
      transition: all 0.4s ease;
    }
  }

  & input:checked {
    & ~ label {
      &::before {
        opacity: 1;
      }

      &::after {
        left: 57%;
        background: #E4EBF5;
      }
    }
  }
`
export const S = {
    Button,
}