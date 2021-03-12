import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider, ThemeConsumer } from '../../context/ThemeContext'
import applicationTheme from '../../styles/theme/applicationTheme'



class ThemeWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider>
        <ThemeConsumer>
          {({ mode }) => {
            const theme = createMuiTheme(applicationTheme(mode))
            return (
              <MuiThemeProvider theme={theme}>
                {children}
              </MuiThemeProvider>
            )
          }}
        </ThemeConsumer>
      </ThemeProvider>
    )
  }
}

export default ThemeWrapper
