import React from 'react';

import { Button as ButtonStyled } from './styles';

function Button(props) {
    const { children } = props
    return (
        <ButtonStyled
        {...props}
        >{children}</ButtonStyled>
    );
}

export default Button;