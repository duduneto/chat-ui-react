import { Balloons, TextareaInput } from '../../components';
import { ChatContainer, Container, ContentContainer, ChatContent, TypingContainer } from "./styles";

const messages = [
	"Hello There",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id mauris ac lacus pretium porta. Duis aliquet at urna sed hendrerit. Vivamus tincidunt scelerisque sagittis. Curabitur a tellus tellus. Integer rhoncus tortor ac erat posuere venenatis. Aenean scelerisque augue et sagittis finibus. Aenean placerat augue eu neque finibus, non interdum lorem sollicitudin."
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
						<TextareaInput>

						</TextareaInput>
					</TypingContainer>
				</ChatContainer>
			</ContentContainer>
		</Container>
	);
}

export default Main;
