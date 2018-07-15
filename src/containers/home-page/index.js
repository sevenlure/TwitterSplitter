import React, { Component } from 'react'
import '../../App.css'
import { Modal, Button } from 'antd'
import splitMessage from '../../util/splitMessage'
import { ZALORA_LOGO, TWITTER_LOGO } from '../../config'
import TitleMessage from '../../components/Title'
import MyTextComposer from '../../components/TextComposer'
import MyMessages from '../../components/Messages'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export default class HomePage extends Component {
  state = {
    isShowModal: false,
    currentAgent: {
      name: 'Twitter Splitter',
      imgUrl: TWITTER_LOGO,
      subName: '@TwitterSplitter'
    },
    messageGroups: [
      [
        {
          isOwn: false,
          text: `Hello!!! i'm Messenbox, please to chat me`,
          imgUrl: TWITTER_LOGO,
          id: 1
        }
      ]
    ]
  }
  showModal = () => {
    this.setState({
      isShowModal: true
    })
  }

  hideModal = e => {
    this.setState({
      isShowModal: false
    })
  }

  handelSendMessage(value) {
    let messages = splitMessage(value).map(item => {
      return {
        isOwn: true,
        text: item,
        imgUrl: ZALORA_LOGO,
        id: 3
      }
    })
    this.setState({
      messageGroups: [...this.state.messageGroups, messages]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={TWITTER_LOGO} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitter Splitter</h1>
        </header>
        <p className="App-intro" />
        <Container>
          <Button type="primary" size="large" onClick={this.showModal}>
            Click here to open MessageBox
          </Button>
        </Container>

        <Modal
          width={'70em'}
          title={<TitleMessage currentAgent={this.state.currentAgent} />}
          visible={this.state.isShowModal}
          onCancel={this.hideModal}
          footer={[
            <MyTextComposer
              key="MyTextComposer"
              handelSendMessage={this.handelSendMessage.bind(this)}
            />
          ]}
        >
          <MyMessages messageGroups={this.state.messageGroups} />
        </Modal>
      </div>
    )
  }
}
