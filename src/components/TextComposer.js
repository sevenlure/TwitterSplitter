import React, { Component } from 'react'
import Maximized from './Maximized'
import { ThemeProvider, TextComposer, Row, Fill, TextInput, Fit, SendButton } from '@livechat/ui-kit'
import { TWITTER_LOGO } from '../config'


export default class MyTextComposer extends Component {

    onMessageSend(value) {
        if (this.props.handelSendMessage) this.props.handelSendMessage(value)
    }

    render() {
        return (
            <ThemeProvider>
                <TextComposer onSend={this.onMessageSend.bind(this)}>
                    <Row align="center">
                        <Fill>
                            <TextInput />
                        </Fill>
                        <Fit>
                            <SendButton />
                        </Fit>
                    </Row>
                </TextComposer>
            </ThemeProvider>
        )
    }
}
