import React from 'react'
import style from './index.pcss'
import Header from './components/header'

class Index extends React.Component {

  render() {
    return (
      <div className={style.init}>
        <Header/>
      </div>
    )
  }
}

export default Index
