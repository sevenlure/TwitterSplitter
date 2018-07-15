import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  FixedWrapper,
  MessageList,
  MessageGroup,
  Message,
  MessageTitle,
  MessageText
} from '@livechat/ui-kit'
import { TWITTER_LOGO } from '../config'
import styled from 'styled-components'

const DEFAULT_MESSAGE_IMG = TWITTER_LOGO

const MessagesContainer = styled.div`
  flex-grow: 1;
  min-height: 0;
  height: 100%;
`
const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class MyMessages extends Component {
  static propTypes = {
    messageGroups: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          text: PropTypes.string.isRequired,
          title: PropTypes.string
        })
      )
    )
  }

  render() {
    return (
      <ThemeProvider>
        <FixedWrapper.Maximized
          style={{ position: 'inherit', width: '100%', height: '60vh' }}
          active={true}
        >
          <WrapperContainer>
            <MessagesContainer>
              <MessageList active containScrollInSubtree>
                {this.props.messageGroups.map((messageGroup, index) => (
                  <MessageGroup key={index} onlyFirstWithMeta>
                    {messageGroup.map((message, messId) => (
                      <Message
                        avatarUrl={
                          message.imgUrl ? message.imgUrl : DEFAULT_MESSAGE_IMG
                        }
                        isOwn={message.isOwn ? message.isOwn : false}
                        //date={message.parsedDate}
                        key={messId}
                      >
                        {message.title && (
                          <MessageTitle title={message.title} />
                        )}
                        {message.text && (
                          <MessageText>{message.text}</MessageText>
                        )}
                      </Message>
                    ))}
                  </MessageGroup>
                ))}
              </MessageList>
            </MessagesContainer>
          </WrapperContainer>
        </FixedWrapper.Maximized>
      </ThemeProvider>
    )
  }
}
