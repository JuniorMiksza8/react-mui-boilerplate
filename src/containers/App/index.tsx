import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import ThemeWrapper from './ThemeWrapper'
import { ThemeConsumer } from '../../context/ThemeContext'
import Home from '../../views/Home'

class App extends Component<RouteComponentProps> {
  render() {
    return (
      <ThemeWrapper>
        <ThemeConsumer>
          {({ changeMode, mode }) => {
            return (
              <Switch>
                <Route
                  path="/"
                  component={(props: RouteComponentProps) =>
                    <Home
                      {...props}
                      changeMode={changeMode}
                      mode={mode}
                    />
                  }
                  exact
                />
              </Switch>
            )
          }}
        </ThemeConsumer>
      </ThemeWrapper>
    )
  }
}

export default withRouter(App)
