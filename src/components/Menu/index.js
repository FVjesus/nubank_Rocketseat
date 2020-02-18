import React from 'react';

import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

export default function Menu() {
    return (
        <Container>
            <Code>
                <QRCode
                    value="https://github.com/FVjesus"
                    backgroundColor="#FFF"
                    color="#8B10AE"
                    size={80}
                />
            </Code>
        </Container>
    );
}