import { Balloons } from '../../components';
import { ChatContainer, Container, ContentContainer, ChatContent, TypingContainer } from "./styles";

const messages = [
	"Hello There",
	"How are u doing? What's going on with u bro?"
]

function Main() {
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

					</TypingContainer>
				</ChatContainer>
			</ContentContainer>
		</Container>
	);
}

export default Main;
