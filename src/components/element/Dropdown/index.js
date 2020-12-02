import styled from "styled-components";

const Dropdown = styled.select`
  width: 100%;
  height: 35px;
  background: ${(props) => (props.primary ? "#eebbc3" : "#b8c1ec")};
  color: ${(props) => (props.primary ? "#121629" : "#232946")};
  padding-left: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  option {
    color: ${(props) => (props.primary ? "#121629" : "#232946")};
    background: ${(props) => (props.primary ? "#eebbc3" : "#b8c1ec")};
    font-weight: 400;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Dropdown;
