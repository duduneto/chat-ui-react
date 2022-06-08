import React from 'react';

import { Button as ButtonStyled } from './styles';

function Button({children}) {
    return (
        <ButtonStyled>{children}</ButtonStyled>
    );
}

export default Button;