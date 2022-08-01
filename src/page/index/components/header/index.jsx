import React from 'react'
import style from './index.pcss'
import IconFont from '../../../../components/icon-font'

class Header extends React.Component {
  render() {
    const {className} = this.props
    return (
      <header className={`${style.init} ${className ?? ''}`}>
        <div className={style.rollbackOperate}>
          <IconFont className={style.icon} name="#icon-undo"/>
          <IconFont className={[style.icon, style.going].join(' ')} name="#icon-undo"/>
        </div>
      </header>
    )
  }
}

export default Header