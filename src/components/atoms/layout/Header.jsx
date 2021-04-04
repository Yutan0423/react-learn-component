import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  padding: 8px 0;
  text-align: center;
  color: #fff;

  & > a {
    color: #fff;
    text-decoration: none;
  }
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
