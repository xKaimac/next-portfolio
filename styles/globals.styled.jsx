import styled from "styled-components";

const StyledTitle = styled.h1`
font-size: 3rem;
font-weight: bold;
color: #333;
margin-bottom: 30px;
padding-top: 2rem;
padding-left: 2rem;
padding-right: 2rem;
text-align: center;

@media screen and (max-width: 768px) {
font-size: 24px;
color: #333;
margin-bottom: 30px;
padding: 1rem;
text-align: center;
}
`

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

export const OuterContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
`

export const Body = styled.p`
font-size: 1.25rem;
padding-top: 2rem;
padding: 2rem;
color: #292929;
line-height: 1.4;

@media screen and (max-width: 768px) {
  padding: 1rem;
}
`

export const Code = styled.a`
font-size: 1.25rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 1rem;

@media screen and (max-width: 768px) {
padding: 1rem;
}
`