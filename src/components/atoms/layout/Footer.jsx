import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 Tan Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  padding: 8px 0;
  text-align: center;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
