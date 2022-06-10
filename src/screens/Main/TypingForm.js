import React from 'react';
import { Button, TextareaInput } from '../../components';
import ChatContext from '../../contexts/context.chat';
import { TypingFormContainer, TextInputContainer, CTAContainer } from './styles'

function TypingForm() {

    const { setNewMessage } = React.useContext(ChatContext);


    const onSubmit = (event) => {
        event.preventDefault();
        setNewMessage('Hellow')
    }

    return (
        <TypingFormContainer
        onSubmit={onSubmit}
        >
            <TextInputContainer>
                <TextareaInput>
                </TextareaInput>
            </TextInputContainer>
            <CTAContainer>
                <Button
                height={'100%'}
                bgColor={'#0000'}
                >Enviar</Button>
            </CTAContainer>
        </TypingFormContainer>
    );
}

export default TypingForm;