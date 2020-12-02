import styled from "styled-components";

const Link = ({ onClick, label, className }) => ( <
    a className = { className }
    onClick = { onClick } > { label } <
    /a>
);

const StyledLink = styled(Link)
`
  color: #fffffe;
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
  text-decoration: none;
`;

export default StyledLink;