import styled from 'styled-components';

const typingContainerHeight = 5;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f1f0ff;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  `;

export const ChatContainer = styled.div`
  height: calc(100% - ${typingContainerHeight}rem);
  width: 100%;
`;
export const ChatContent = styled.div`
    width: 100%;
    height: 100%;
`;

export const TypingContainer = styled.div`
	height: ${typingContainerHeight}rem;
	width: 100%;
	background-color: #FFF;
`;

export const TypingFormContainer = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`;