import { Button, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styles from './styles'


interface Props extends RouteComponentProps {
  classes: any,
  changeMode: (mode: 'light' | 'dark') => void,
  mode: 'light' | 'dark'
}

class Home extends Component<Props> {
  render() {
    const { mode, changeMode } = this.props
    return (
      <div>
        <Button color="primary" variant="contained" onClick={() => changeMode(mode === 'dark' ? 'light' : 'dark')} >
          {
            mode
          }
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
