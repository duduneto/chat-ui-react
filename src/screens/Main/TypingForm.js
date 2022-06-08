import React from 'react';
import { Button, TextareaInput } from '../../components';
import { TypingFormContainer, TextInputContainer, CTAContainer } from './styles'

function TypingForm() {

    const onSubmit = (event) => {
        event.preventDefault();
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