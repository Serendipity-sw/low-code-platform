import React, { useEffect, useState } from 'react'
import style from './index.pcss'
import IconFont from '../../../../components/icon-font'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { EditTitle } from '../../store/low-code-data'

export default props => {
  const lowCodeData = useSelector( state => state.lowCodeData )
  const [ title, setTitle ] = useState( lowCodeData.title )
  const [ editVisible, toggleEditVisible ] = useState( false )
  const dispatch = useDispatch()

  useEffect( _ => {
    setTitle( lowCodeData.title )
  }, [ lowCodeData.title ] )

  const handleToggleEdit = _ => toggleEditVisible( !editVisible )

  const handleSaveTitle = _ => {
    handleToggleEdit()
    if ( lowCodeData.title !== title ) {
      dispatch( EditTitle( title.trim() ) )
    }
  }

  return (
    <header className={ `${ style.init } ${ props.className ?? '' }` }>
      <div className={ style.rollbackOperate }>
        <IconFont className={ style.icon } name="#icon-undo"/>
        <IconFont className={ [ style.icon, style.going ].join( ' ' ) } name="#icon-undo"/>
      </div>
      <span className={ `${ style.title } ${ editVisible ? style.none : '' }` }>
          { title }<IconFont onClick={ handleToggleEdit } className={ style.icon } name="#icon-bianji"/>
        </span>
      <Input className={ `${ style.input } ${ !editVisible ? style.none : '' }` } placeholder="请输入标题"
             value={ title } onChange={ e => setTitle( e.target.value ) }
             suffix={ <IconFont className={ style.addBtn } onClick={ handleSaveTitle } name="#icon-baocun"/> }/>
      <div className={ style.placeholder }/>
    </header>
  )
}