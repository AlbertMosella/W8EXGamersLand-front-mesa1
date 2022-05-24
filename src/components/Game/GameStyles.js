import styled from "styled-components";

const GameStyles = styled.li`
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  width: 100vw;
  height: 330px;
  margin-top: 40px;
  margin-bottom: 40px;
  transform: skewY(-10deg);
  overflow: hidden;

  img {
    transform: skewY(10deg);
    position: relative;
    right: 90px;
    max-width: 1022px;

    height: 575px;
  }
  .game__image {
    max-width: 1022px;
    overflow: hidden;
    margin-left: 158px;
  }
  .game__info {
    text-align: left;
    width: 660px;
    color: #fff;
    margin-right: 400px;
    margin: 75px;
  }
`;

export default GameStyles;
