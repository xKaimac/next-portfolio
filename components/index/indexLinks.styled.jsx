import styled from "styled-components";

export const Links = styled.a `
  display: block;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  text-decoration: none;
  border-radius: 1rem;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid #5CB0FF;
}
`