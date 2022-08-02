import React from 'react'
import style from './index.pcss'
import { useDispatch, useSelector } from 'react-redux'
import { editSelected } from '../../store'
import { throttle } from 'lodash'

export default _ => {
  const selected = useSelector( state => state.toolbarStore.selected )
  const dispatch = useDispatch()

  const handleSelected = select => {
    if ( select !== selected ) {
      dispatch( editSelected( select ) )
    }
  }

  return (
    <div className={ style.init }>
      <span className={ [ style.tab, selected === 1 ? style.selected : '' ].join( ' ' ) }
            onClick={ throttle( _ => handleSelected( 1 ), 200 ) }>开始</span>
      <span className={ [ style.tab, selected === 2 ? style.selected : '' ].join( ' ' ) }
            onClick={ throttle( _ => handleSelected( 2 ), 200 ) }>插入</span>
    </div>
  )
}