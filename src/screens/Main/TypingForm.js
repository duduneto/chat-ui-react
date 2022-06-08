import React from 'react';
import { Button, TextareaInput } from '../../components';
import { TypingFormContainer } from './styles'

function TypingForm() {
    return (
        <TypingFormContainer>
            <div>
                <TextareaInput>
                </TextareaInput>
            </div>
            <div>
                <Button>Enviar</Button>
            </div>
        </TypingFormContainer>
    );
}

export default TypingForm;