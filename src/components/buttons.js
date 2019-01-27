import styled from 'styled-components'
import colors from '../styles/colors'

const ActionButton = styled.div`
  background-color: ${colors.theme.main};
  border-radius: 3px;
  transition: all 0.2s;
  padding: 8px 15px;
  margin: 0 auto;
  border-radius: 3px;
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: center;
  
  a {
    color: white !important;
    font-size: 14px !important;
    font-weight: 500; // medium
    transition: color 0.2s;
    &:hover {
      text-decoration: none;
    }
  }
  
  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`

const ActionButtonOutline = styled(ActionButton)`
  border: 2px solid ${colors.theme.accent};
  background-color: white;
  a {
    color: ${colors.theme.darkaccent} !important;
    transition: color 0.2s;
  }
  // @media (max-width: 768px) {
  //   display: block;
  // }
  // @media (max-width: 630px) {
  //   display: none;
  // }
`

export {ActionButtonOutline, ActionButton}