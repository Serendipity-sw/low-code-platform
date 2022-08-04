import React, { useEffect, useState } from 'react'
import style from './index.pcss'
import IconFont from '../../../../components/icon-font'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Tooltip from '../../../../components/tooltip'
import { EditTitle } from '../../store/lowCodeDataReducers'

export default props => {
  const lowCodeData = useSelector( state => state.lowCodeData )
  const [ title, setTitle ] = useState( lowCodeData.title )
  const [ editVisible, toggleEditVisible ] = useState( false )
  const dispatch = useDispatch()

  useEffect( _ => {
    lowCodeData.title !== title && setTitle( lowCodeData.title )
  }, [ lowCodeData.title ] )

  const handleToggleEdit = _ => toggleEditVisible( !editVisible )

  const handleSaveTitle = _ => {
    handleToggleEdit()
    const updateTitle = title.trim()
    if ( lowCodeData.title !== updateTitle ) {
      dispatch( EditTitle( updateTitle ) )
    }
  }

  return (
    <header className={ `${ style.init } ${ props.className ?? '' }` }>
      <div className={ style.rollbackOperate }>
        <Tooltip content="撤销">
          <IconFont className={ style.icon } name="#icon-undo"/>
        </Tooltip>
        <Tooltip content="恢复">
          <IconFont className={ [ style.icon, style.recover ].join( ' ' ) } name="#icon-undo"/>
        </Tooltip>
      </div>
      <span className={ `${ style.title } ${ editVisible ? style.none : '' }` }>
          { title }
        <Tooltip content="编辑标题">
          <IconFont onClick={ handleToggleEdit } className={ style.icon } name="#icon-bianji"/>
        </Tooltip>
        </span>
      <Input className={ `${ style.input } ${ !editVisible ? style.none : '' }` } placeholder="请输入标题"
             value={ title } onChange={ e => setTitle( e.target.value ) }
             suffix={
               <Tooltip content="标题保存">
                 <IconFont className={ style.addBtn } onClick={ handleSaveTitle }
                           name="#icon-baocun"/>
               </Tooltip>
             }/>
      <div className={ style.placeholder }>
        <Tooltip content="预览">
          <IconFont className={ style.icon } name="#icon-chakanMV"/>
        </Tooltip>
        <Tooltip content="保存">
          <IconFont className={ style.icon } name="#icon-baocun"/>
        </Tooltip>
      </div>
    </header>
  )
}