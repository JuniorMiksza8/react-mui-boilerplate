import React, { Component, createContext } from 'react'
import { saveStorage } from '../../services/storage'

// That's our local storage key
export const STORAGE_KEY = 'theme'

// Whole context data

interface ThemeContextState {
  mode: 'light' | 'dark',
}

interface ThemeContextData extends ThemeContextState {
  changeMode: (mode: 'light' | 'dark') => void,
}

// Create context
const { Provider, Consumer } = createContext({} as ThemeContextData)

export const ThemeConsumer = Consumer

export class ThemeProvider extends Component {

  // Initial state
  state: ThemeContextState = {
    mode: 'light',
  }

  /**
   * Change theme mode
   *
   * @param mode
   */
  changeMode = (mode: 'light' | 'dark') => {
    this.setState({
      mode
    }, () => {
      saveStorage(STORAGE_KEY, this.state)
    })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          changeMode: this.changeMode
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
