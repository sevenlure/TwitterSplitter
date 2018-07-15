import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal, Button } from 'antd';
import AppCon from './components/App'
import Maximized from './components/Maximized'
import {
  ThemeProvider, FixedWrapper, SampleMaximized, SampleMinimized, Avatar, Message, MessageText,
  TitleBar, IconButton, CloseIcon, defaultTheme, TextComposer,
  AgentBar, Row, Column, Title, Subtitle,
  Fill, TextInput, Fit, SendButton
} from '@livechat/ui-kit'
import splitMessage from './util/splitMessage'
import { ZALORA_LOGO, TWITTER_LOGO } from './config'
import HomePage from './containers/home-page'


class App extends Component {
  render() {
    return (
      <HomePage></HomePage>
    );
  }
}

export default App;
