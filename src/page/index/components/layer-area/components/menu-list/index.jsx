import React from 'react'
import style from './index.pcss'
import { Tree } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { controlsType } from '../../../../utils/controls-type'
import IconFont from '../../../../../../components/icon-font'
import { SelectControls } from '../../../../store/lowCodeDataReducers'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const pageContentDataProcess = data => {
    const objArray = Object.entries( controlsType )
    return data.map( modal => {
      let icon, title
      for ( const [ key, item ] of objArray ) {
        if ( item.name === modal.controls ) {
          icon = item.icon
          title = item.title
          break
        }
      }
      return { title: modal.alias ?? title, key: modal.id, icon: <IconFont name={ icon }/> }
    } )
  }

  const handleSelect = selectedKeys => {
    dispatch( SelectControls( selectedKeys ) )
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Tree
        showIcon
        multiple
        selectedKeys={ selectControls }
        className="draggable-tree"
        blockNode
        treeData={ pageContentDataProcess( pageContentData ) }
        onSelect={ handleSelect }
      />
    </div>
  )
}