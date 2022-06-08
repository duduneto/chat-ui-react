import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextareaInput = styled.textarea`
    width: calc(100% - 6px);
    height: 60px;
    border-color: gray;
    resize: none;
    border-radius: 10px;
`;
