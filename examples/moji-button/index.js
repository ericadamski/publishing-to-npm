import React from "react";
import styled from "styled-components";
import { translate } from "moji-translate";

const Button = styled.button`
  position: relative;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  color: #50514f;
  border: 2px solid #a846a0;
  padding: 0.5rem 1rem;
  min-width: 150px;
  background: transparent;
  font-size: 1rem;

  &:focus,
  &:active {
    outline: none;

    &:after {
      transform: translate(0, 0);
    }
  }

  &:hover {
    cursor: pointer;

    &:after {
      transform: translate(0, 0);
    }
  }

  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    background: #a846a0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.25;
    transition: all 0.1s ease;
    transform: translate(5%, 20%);
  }
`;

export default function Tuner(props) {
  return (
    <Button className={props.className} onClick={props.onClick}>
      {translate(props.children)}
    </Button>
  );
}
