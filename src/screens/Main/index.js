import React from 'react';
import { Balloons } from '../../components';
import ChatContext from '../../contexts/context.chat';
import { ChatContainer, Container, ContentContainer, ChatContent, TypingContainer } from "./styles";
import TypingForm from './TypingForm';

const _messages = [
	"Hello There",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id mauris ac lacus pretium porta. Duis aliquet at urna sed hendrerit. Vivamus tincidunt scelerisque sagittis. Curabitur a tellus tellus. Integer rhoncus tortor ac erat posuere venenatis. Aenean scelerisque augue et sagittis finibus. Aenean placerat augue eu neque finibus, non interdum lorem sollicitudin."
]

function Main() {

	const { messages } = React.useContext(ChatContext);

	return (
		<Container>
			<ContentContainer>

				<ChatContainer>
					<ChatContent>
						{
							messages.map(message => <Balloons message={message} />)
						}
					</ChatContent>
					<TypingContainer>
						<TypingForm />
					</TypingContainer>
				</ChatContainer>
			</ContentContainer>
		</Container>
	);
}

export default Main;
