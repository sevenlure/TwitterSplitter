import React, { Component } from 'react'
import Maximized from './Maximized'
import { ThemeProvider, FixedWrapper } from '@livechat/ui-kit'


class App extends Component {

    render() {
        return (
            <ThemeProvider>
                <FixedWrapper.Root maximizedOnInit>
                        <FixedWrapper.Maximized>
                            <Maximized {...this.props} />
                        </FixedWrapper.Maximized>
                    </FixedWrapper.Root>
			</ThemeProvider>
        )
    }
}

export default App
