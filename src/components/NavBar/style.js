import styled from "styled-components";
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #fcfcfc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0px -2px 10px rgba(0,0,0,0.3);
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &.active {
    color: #000;

    &::after {
      ${fadeIn({time: '0.5s'})};
      content: '•';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 34px;
    }
  }
`
