import styled from "styled-components";

const Error404PageComponent = styled.div`
  display: flex;
  align-items: center;

  h1 {
    background-color: #1da1f2;
    color: #f5f8fa;
  }
`;

const Error404Page = () => {
  return (
    <Error404PageComponent>
      <h1>ERROR 404, PAGE NOT FOUND</h1>
    </Error404PageComponent>
  );
};

export default Error404Page;
