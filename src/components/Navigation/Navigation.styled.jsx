import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-radius: 6px;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:active {
    color: #e84a5f;
    background-color: #0f3345;
  }
`;

// const BackMovLink = styled(NavLink)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover,
//   &:focus {
//     color: orangered;//
// `;
// export const StyledLink = styled(NavLink)`
//   color: black;
// `;
