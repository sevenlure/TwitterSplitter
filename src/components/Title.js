import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  AgentBar,
  Row,
  Column,
  Avatar,
  Title,
  Subtitle
} from '@livechat/ui-kit'

export default class MyTitle extends Component {
  static propTypes = {
    currentAgent: PropTypes.shape({
      name: PropTypes.string,
      subName: PropTypes.string,
      imgUrl: PropTypes.string
    })
  }

  render() {
    const { currentAgent } = this.props
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
                <Subtitle>{currentAgent.subName}</Subtitle>
              </Column>
            </Row>
          </AgentBar>
        )}
      </ThemeProvider>
    )
  }
}
