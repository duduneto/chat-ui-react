import React from 'react';

import { Container, ContentContainer, Balloon as BalloonComp } from './styles';

function Balloons({
    message
}) {
    return (
        <Container>
            <ContentContainer>
                <BalloonComp>
                    {
                        message
                    }
                </BalloonComp>
            </ContentContainer>
        </Container>
    );
}

export default Balloons;