import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Modal, Button } from 'antd';
import AppCon from '../../components/App'
import Maximized from '../../components/Maximized'
import {
    ThemeProvider, FixedWrapper, SampleMaximized, SampleMinimized, Avatar, Message, MessageText,
    TitleBar, IconButton, CloseIcon, defaultTheme, TextComposer,
    AgentBar, Row, Column, Title, Subtitle,
    Fill, TextInput, Fit, SendButton
} from '@livechat/ui-kit'
import splitMessage from '../../util/splitMessage'
import { ZALORA_LOGO, TWITTER_LOGO } from '../../config'
import TitleMessage from '../../components/Title'
import MyTextComposer from '../../components/TextComposer'
import MyMessages from '../../components/Messages'
import styled from 'styled-components'

const themes = {
    defaultTheme: {
        FixedWrapperMaximized: {
            css: {
                boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
            },
        },
    },
}

const commonThemeButton = {
    fontSize: '16px',
    padding: '1em',
    borderRadius: '.6em',
    margin: '1em',
    cursor: 'pointer',
    outline: 'none',
    border: 0,
}

const themeDefaultButton = {
    ...commonThemeButton,
    background: '#427fe1',
    color: '#fff',
}


export default class HomePage extends Component {
    state = {
        visible: false,
        events: [[
            {
                isOwn: false,
                text: `Hello!!! i'm Messenbox, please to chat me`,
                imgUrl: TWITTER_LOGO
            },
        ]]
    }
    showModal = () => {
        this.setState({
            visible: true,

        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handelSendMessage(value) {
        let messages = splitMessage(value).map(item => {
            return {
                isOwn: true,
                text: item,
                imgUrl: ZALORA_LOGO
            }
        })
        this.setState({
            events: [...this.state.events, messages]
        })
    }

    render() {
        let imgUrl = 'https://lh3.googleusercontent.com/-xQ2KOt5sjm0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7rzuqOCSx8CuUy5KmTxRSP2LWGClg/s64-c-mo/photo.jpg'
        imgUrl = TWITTER_LOGO
        let currentAgent = {
            name: 'thao',
            imgUrl,
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
            </p>
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    width={'70em'}
                    title={<TitleMessage />}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <MyTextComposer handelSendMessage={this.handelSendMessage.bind(this)} />,
                    ]}
                >
                    <MyMessages
                    events={this.state.events}
                    ></MyMessages>
                </Modal>



            </div>
        );
    }

}