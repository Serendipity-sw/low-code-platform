import React, { useRef } from 'react'
import Tippy from '@tippyjs/react'
import style from './index.pcss'
import IconFont from '../icon-font'
import 'tippy.js/themes/light.css'

export default props => {

  const ref = useRef()

  const downListDomProcess = list => {
    return (
      <div className={ style.downList }>
        {
          list?.map?.( item => (
            <div key={ item.iconName } className={ style.row } onClick={ _ => {
              handleClose()
              item?.onClick?.()
            } }>
              <IconFont className={ style.icon } name={ `#${ item.iconName }` }/>
              { item.name }
            </div>
          ) )
        }
      </div>
    )
  }

  const handleClose = _ => {
    ref.current._tippy.hide()
  }

  return (
    <Tippy content={ downListDomProcess( props.data ) } ref={ ref } interactive={ true } theme="light"
           className={ 'animate__animated animate__rubberBand' }>
      { props.children }
    </Tippy>
  )
}