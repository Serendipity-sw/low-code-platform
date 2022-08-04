import React from 'react'
import style from './index.pcss'
import IconFont from '../../../../../../components/icon-font'
import { controlsList } from './store/controls'
import { useDispatch, useSelector } from 'react-redux'
import { ClearSelectedInsertControls, SelectedInsertControls } from '../../../../store/lowCodeDataReducers'

export default props => {

  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const dispatch = useDispatch()

  const handleControlsClick = selected => {
    console.log( insertControlsSelected === selected, insertControlsSelected, selected )
    dispatch( insertControlsSelected === selected ? ClearSelectedInsertControls() : SelectedInsertControls( selected ) )
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      {
        controlsList.map( item =>
          <div onClick={ _ => {
            handleControlsClick( item.selected )
          } } key={ item.selected }
               className={ [ style.column, insertControlsSelected === item.selected ? style.selected : '' ].join( ' ' ) }>
            <IconFont className={ style.icon } name={ item.iconName }/>
            { item.name }
          </div>
        )
      }
    </div>
  )
}