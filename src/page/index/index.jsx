import React from 'react'
import style from './index.pcss'
import Header from './components/header'
import Toolbar from './components/toolbar'
import Canvas from './components/canvas'

class Index extends React.Component {

  render() {
    return (
      <div className={ style.init }>
        <Header/>
        <Toolbar/>
        <Canvas/>
      </div>
    )
  }
}

export default Index
