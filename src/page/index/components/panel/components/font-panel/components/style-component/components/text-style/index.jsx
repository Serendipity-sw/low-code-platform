import React from 'react'
import style from '../index.pcss'
import { Collapse, InputNumber, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../../../store/lowCodeDataReducers'
import { FindStyle } from '../../../../../../../../utils/find-style-attributes'
import { fontFamilyList, fontStyleMapList, textAlignMapList } from '../../../../../../../../utils/font-style-util'
import ColorPickerDropDown from '../../../../../../../../../../components/color-picker-drop-down'
import IconFont from '../../../../../../../../../../components/icon-font'
import LayerName from '../../../../../layer-name'
import BackgroundStyle from '../../../../../background-style'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const changeSelectControlsItem = ( value, keyName ) => {
    const list = selectControlsList()
    list.forEach( item => {
      item.style[keyName] = value
    } )
    dispatch( EditPageItemList( list ) )
  }

  const findStyle = FindStyle( pageContentData, selectControls )

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <LayerName/>
      <Collapse defaultActiveKey={ [ 'font-style' ] }>
        <Collapse.Panel header="字体" key="font-style">
          <div className={ style.row }>
            <span className={ style.columnTitle }>字体</span>
            <div className={ style.inputArea }>
              <Select options={ fontFamilyList.map( item => ( { label: item, value: item } ) ) }
                      value={ findStyle?.fontFamily }
                      onChange={ value => changeSelectControlsItem( value, 'fontFamily' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字号</span>
            <div className={ style.inputArea }>
              <InputNumber min={ 10 } max={ 99 }
                           value={ findStyle?.fontSize?.replace?.( 'px', '' ) }
                           onChange={ value => changeSelectControlsItem( `${ value }px`, 'fontSize' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字形</span>
            <div className={ style.inputArea }>
              <Select options={ fontStyleMapList }
                      value={ findStyle?.fontStyle }
                      onChange={ value => changeSelectControlsItem( value, 'fontStyle' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>对齐方式</span>
            <div className={ style.inputArea }>
              <Select options={ textAlignMapList }
                      value={ findStyle?.textAlign }
                      onChange={ value => changeSelectControlsItem( value, 'textAlign' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字体颜色</span>
            <div className={ style.inputArea }>
              <ColorPickerDropDown colorType={ 'color' }>
                <IconFont className={ style.selectColor } name="#icon-youqitiaoseban"/>
              </ColorPickerDropDown>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>间距</span>
            <div className={ style.inputArea }>
              <InputNumber min={ 0 } max={ 99 }
                           value={ findStyle?.letterSpacing?.replace?.( 'px', '' ) }
                           onChange={ value => changeSelectControlsItem( `${ value }px`, 'letterSpacing' ) }/>
            </div>
          </div>
        </Collapse.Panel>
      </Collapse>
      <BackgroundStyle/>
    </div>
  )
}