import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  TextComposer,
  Row,
  Fill,
  TextInput,
  Fit,
  SendButton
} from '@livechat/ui-kit'
import { isValidMessage } from '../util/splitMessage'
import { message } from 'antd'

const INPUT_MAX = 2000

export default class MyTextComposer extends Component {
  state = {
    input: ''
  }

  static propTypes = {
    handelSendMessage: PropTypes.func
  }

  onMessageSend(value) {
    if (value.length >= INPUT_MAX) {
      message.warning(
        `message too long, The maximum number of characters is ${INPUT_MAX}.`
      )
      return
    }
    let isValid = isValidMessage(value)
    if (isValid && this.props.handelSendMessage)
      this.props.handelSendMessage(value)
    else
      message.error(
        'message contains a span of non-whitespace characters longer than 50 characters.'
      )
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
