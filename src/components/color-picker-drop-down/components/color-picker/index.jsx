import React from 'react'
import { SketchPicker } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../page/index/store/lowCodeDataReducers'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const selectControlsList = selectList => cloneDeep( pageContentData.filter( item => selectList.includes( item.id ) ) )

  const processRgbaStr = controlsList => {
    const list = selectControlsList( controlsList )
    return list?.[0]?.style?.[props.colorType]
  }

  const rgbaConvertToRgba = controlsList => {
    let rgbaStr = processRgbaStr( controlsList )?.replace?.( 'rgba(', '' ).replace( ')', '' )
    const rgbaArray = rgbaStr?.split?.( ',' )
    return {
      r: rgbaArray?.[0] ?? 0,
      g: rgbaArray?.[1] ?? 0,
      b: rgbaArray?.[2] ?? 0,
      a: rgbaArray?.[3] ?? 1
    }
  }

  const colorChange = ( { rgb: { r, g, b, a } } ) => {
    const rgba = `rgba(${ r },${ g },${ b },${ a })`
    const list = selectControlsList( selectControls )
    list.forEach( item => {
      item.style[props.colorType] = rgba
    } )
    dispatch( EditPageItemList( list ) )
  }

  return (
    <SketchPicker color={ rgbaConvertToRgba( selectControls ) } onChange={ colorChange }/>
  )
}