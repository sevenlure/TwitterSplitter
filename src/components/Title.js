import React, { Component } from 'react'
import Maximized from './Maximized'
import { ThemeProvider, AgentBar, Row, Column, Avatar, Title, Subtitle } from '@livechat/ui-kit'
import { TWITTER_LOGO } from '../config'


export default class MyTitle extends Component {
    render() {
        let imgUrl = 'https://lh3.googleusercontent.com/-xQ2KOt5sjm0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7rzuqOCSx8CuUy5KmTxRSP2LWGClg/s64-c-mo/photo.jpg'
        imgUrl = TWITTER_LOGO
        let currentAgent = {
            name: 'thao',
            imgUrl,
        }
        return (
            <ThemeProvider>
                {currentAgent && (
                    <AgentBar
                        style={{
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            padding: 0
                        }}
                    >
                        <Row>
                            <Column>
                                <Avatar imgUrl={currentAgent.imgUrl} />
                            </Column>
                            <Column>
                                <Title>{currentAgent.name}</Title>
                                <Subtitle>Support hero</Subtitle>
                            </Column>
                        </Row>
                    </AgentBar>
                )}
            </ThemeProvider>
        )
    }
}
