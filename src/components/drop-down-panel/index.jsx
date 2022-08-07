import React, { useRef } from 'react'
import Tippy from '@tippyjs/react'
import style from './index.pcss'
import 'tippy.js/themes/light.css'
import { useSelector } from 'react-redux'

export default props => {

  const ref = useRef()

  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const downListDomProcess = list => {
    return (
      <div className={ style.downList }>
        {
          list?.map?.( item => (
            <div key={ item.name }
                 className={ [ style.column, insertControlsSelected === item.selected && style.selected ].join(' ') }
                 onClick={ _ => {
                   handleClose()
                   item?.onClick?.( item.selected )
                 } }>
              <img src={ item.image } className={ style.exampleIcon } alt={ item.name }/>
              <span className={ style.title }>{ item.name }</span>
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
    <Tippy content={ downListDomProcess( props.data ) } disabled={ props.disabled ?? false }
           ref={ ref }
           interactive={ true } theme="light"
           className={ 'animate__animated animate__rubberBand' }>
      { props.children }
    </Tippy>
  )
}