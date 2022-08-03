import React from 'react'
import style from './index.pcss'
import Header from './components/header'
import Toolbar from './components/toolbar'
import Canvas from './components/canvas'
import Panel from './components/panel'

class Index extends React.Component {

  render() {
    return (
      <div className={ style.init }>
        <Header/>
        <Toolbar/>
        <div className={ style.editArea }>
          <Canvas/>
          <Panel/>
        </div>
      </div>
    )
  }
}

export default Index
