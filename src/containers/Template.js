import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Main,Header} from '../styled/Template'


injectTapEventPlugin()
class Template extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer
          />
          
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
