import styled from "styled-components";

const Subtitle = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  color: ${(props) => props.color || "var(--lightyellow)"};
`;

// const Subtitle = ({ text }) => {
//   return <h2 className="sub-title">{text}</h2>;
// };

export default Subtitle;
