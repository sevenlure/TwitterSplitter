import React, { Component } from 'react';
import {
    ThemeProvider, FixedWrapper, SampleMaximized, SampleMinimized, Avatar, Message, MessageText,
    TitleBar, IconButton, CloseIcon, Row, AgentBar, Column,
    Title, Subtitle, RateGoodIcon, RateBadIcon, MessageList, MessageGroup,MessageTitle,
    MessageMedia,MessageButtons,MessageButton,TextComposer,Fill,TextInput,Fit,SendButton,
    defaultTheme
    
} from '@livechat/ui-kit'


class Maximized extends Component {

    onMessageSend(value){
        if(this.props.handelSendMessage) this.props.handelSendMessage(value)
    }
    render() {
        let imgUrl = 'https://lh3.googleusercontent.com/-xQ2KOt5sjm0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7rzuqOCSx8CuUy5KmTxRSP2LWGClg/s64-c-mo/photo.jpg'
        let currentAgent = {
            name: 'thao',
            imgUrl,
        }
        let chatState = 'CHATTING'
        let rate = 'good'

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                {/* <TitleBar
                    rightIcons={[
                        <IconButton key="close" onClick={() => { }}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                    title="Welcome to LiveChat"
                /> */}
                {/* {currentAgent && (
                    <AgentBar>
                        <Row fill>
                            <Column>
                                <Avatar imgUrl={currentAgent.imgUrl} />
                            </Column>
                            <Column fill>
                                <Title>{currentAgent.name}</Title>
                                <Subtitle>Support hero</Subtitle>
                            </Column>
                        </Row>
                    </AgentBar>
                )} */}
                <div
                    style={{
                        flexGrow: 1,
                        minHeight: 0,
                        height: '100%',
                    }}
                >
                <MessageList active containScrollInSubtree>
					{this.props.events.map((messageGroup, index) => (
						<MessageGroup key={index} onlyFirstWithMeta>
							{messageGroup.map(message => (
								<Message
									avatarUrl={imgUrl}
									//date={message.parsedDate}
                                    //isOwn={message.authorId === ownId || message.own === true}
                                    isOwn={message.isOwn}
                                    key={message.id}
								>
                                	{message.title && <MessageTitle title={message.title} />}
									{message.text && 
                                    <MessageText 
                                  
                                    >{message.text}</MessageText>}
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
                </div>
                {/* <TextComposer onSend={this.onMessageSend.bind(this)}>
				<Row align="center">
					<Fill>
						<TextInput />
					</Fill>
					<Fit>
						<SendButton />
					</Fit>
				</Row>
			</TextComposer> */}
            {/* <div
				style={{
					textAlign: 'center',
					fontSize: '.6em',
					padding: '.4em',
					background: '#fff',
					color: '#888',
				}}
			>
				{'Powered by LiveChat'}
			</div> */}
            </div>
        )
    }
}

export default Maximized
