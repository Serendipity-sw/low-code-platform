import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'
import { useSelector } from 'react-redux'

export default _ => {

  const moveDrag = xy => moveableRef?.request?.( 'draggable', { ...xy, isInstant: true } )

  const calculateDragCenterAndContainerCenter = _ => {
    const dragSize = moveableRef.getRect()
    const dragCenter = { x: dragSize.width, y: dragSize.height }
    const containerCenter = { x: containerSize.width, y: containerSize.height }
    return { dragCenter, containerCenter }
  }

  const handleAlignJustifyCenter = _ => {
    const { dragCenter, containerCenter } = calculateDragCenterAndContainerCenter()
    moveDrag( { x: containerCenter.x / 2 - dragCenter.x / 2, y: containerCenter.y / 2 - dragCenter.y / 2 } )
  }

  const handleJustifyLeft = _ => {
    moveDrag( { x: 0 } )
  }

  const handleJustifyCenter = _ => {
    const { dragCenter, containerCenter } = calculateDragCenterAndContainerCenter()
    moveDrag( { x: containerCenter.x / 2 - dragCenter.x / 2 } )
  }

  const handleJustifyRight = _ => {
    const { dragCenter, containerCenter } = calculateDragCenterAndContainerCenter()
    moveDrag( { x: containerCenter.x - dragCenter.x } )
  }

  const handleAlignTop = _ => {
    moveDrag( { y: 0 } )
  }

  const handleAlignCenter = _ => {
    const { dragCenter, containerCenter } = calculateDragCenterAndContainerCenter()
    moveDrag( { y: containerCenter.y / 2 - dragCenter.y / 2 } )
  }

  const handleAlignBottom = _ => {
    const { dragCenter, containerCenter } = calculateDragCenterAndContainerCenter()
    moveDrag( { y: containerCenter.y - dragCenter.y } )
  }

  const { moveableRef, containerSize, selectControls } = useSelector( state => state.lowCodeData )

  const dropDownList = [
    {
      iconName: 'icon-jueduijuzhong',
      name: '水平垂直居中',
      onClick: handleAlignJustifyCenter
    },
    {
      iconName: 'icon-zuoduiqi1',
      name: '左对齐',
      onClick: handleJustifyLeft
    },
    {
      iconName: 'icon-zongxiangjuzhong',
      name: '水平居中',
      onClick: handleJustifyCenter
    },
    {
      iconName: 'icon-youduiqi1',
      name: '右对齐',
      onClick: handleJustifyRight
    },
    {
      iconName: 'icon-shangduiqi',
      name: '上对齐',
      onClick: handleAlignTop
    },
    {
      iconName: 'icon-hengxiangjuzhong',
      name: '垂直居中',
      onClick: handleAlignCenter
    },
    {
      iconName: 'icon-xiaduiqi',
      name: '下对齐',
      onClick: handleAlignBottom
    }
  ]

  return (
    <DropDown data={ dropDownList } disabled={ selectControls.length === 0 }>
      <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }>
        <IconFont className={ style.icon } name="#icon-jueduijuzhong"/>
        水平对齐
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}