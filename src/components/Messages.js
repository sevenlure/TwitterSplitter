import React, { Component } from 'react'
import Maximized from './Maximized'
import { ThemeProvider, FixedWrapper, MessageList, MessageGroup, Message, MessageTitle, MessageText, MessageMedia } from '@livechat/ui-kit'
import { TWITTER_LOGO } from '../config'
import styled from 'styled-components'

const DEFAULT_MESSAGE_IMG = TWITTER_LOGO

const MessagesContainer = styled.div`
  flex-grow: 1;
  min-height: 0;
  height: '100%';
`

export default class MyMessages extends Component {
    render() {
        return (
            <ThemeProvider>
                <FixedWrapper.Maximized
                    style={{ position: 'inherit', width: '100%', height: '100%' }}
                    active={true}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <MessagesContainer>
                            <MessageList active containScrollInSubtree>
                                {this.props.events.map((messageGroup, index) => (
                                    <MessageGroup key={index} onlyFirstWithMeta>
                                        {messageGroup.map(message => (
                                            <Message
                                                avatarUrl={message.imgUrl ? message.imgUrl : DEFAULT_MESSAGE_IMG}
                                                isOwn={message.isOwn ? message.isOwn : false}
                                                //date={message.parsedDate}
                                                key={message.id}
                                            >
                                                {message.title && <MessageTitle title={message.title} />}
                                                {message.text &&
                                                    <MessageText>{message.text}</MessageText>}
                                                {message.imageUrl && (
                                                    <MessageMedia>
                                                        <img src={message.imageUrl} />
                                                    </MessageMedia>
                                                )}
                                            </Message>
                                        ))}
                                    </MessageGroup>
                                ))}
                            </MessageList>
                        </MessagesContainer>
                    </div>
                </FixedWrapper.Maximized>
            </ThemeProvider>
        )
    }
}
