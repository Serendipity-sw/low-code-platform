import React, {useState} from 'react'
import style from './index.pcss'
import {Collapse, InputNumber, Select} from 'antd'
import IconFont from '../../../../../../components/icon-font'
import ColorPickerDropDown from '../../../../../../components/color-picker-drop-down'
import {useDispatch, useSelector} from "react-redux"
import {FindStyle} from "../../../../utils/find-style-attributes"
import {BorderStyleUtils, BorderTypeUtils} from "./utils/border-css"
import {EditPageItemList} from "../../../../store/lowCodeDataReducers"
import {cloneDeep} from "lodash"

export default _ => {

  const {selectControls, pageContentData} = useSelector(state => state.lowCodeData)

  const dispatch = useDispatch()

  const findStyle = FindStyle(pageContentData, selectControls)

  const [borderSelect, setBorderSelect] = useState('')

  const selectControlsList = _ => cloneDeep(pageContentData.filter(item => selectControls.includes(item.id)))

  const handleUpdateStyle = (key, value) => {
    const list = selectControlsList()
    list.forEach(item => {
      item.style[key] = value
    })
    dispatch(EditPageItemList(list))
  }

  return (
    <Collapse defaultActiveKey={['border-style']}>
      <Collapse.Panel header="边框" key="border-style">
        <div className={style.row}>
          <span className={style.columnTitle}>边框线</span>
          <div className={style.inputArea}>
            <div className={style.borderArea}>
              <i onClick={_ => setBorderSelect('borderTopWidth')}
                 className={[style.borderTop, borderSelect === 'borderTopWidth' && style.selected].join(' ')}/>
              <i onClick={_ => setBorderSelect('borderRightWidth')}
                 className={[style.borderRight, borderSelect === 'borderRightWidth' && style.selected].join(' ')}/>
              <i onClick={_ => setBorderSelect('borderBottomWidth')}
                 className={[style.borderBottom, borderSelect === 'borderBottomWidth' && style.selected].join(' ')}/>
              <i onClick={_ => setBorderSelect('borderLeftWidth')}
                 className={[style.borderLeft, borderSelect === 'borderLeftWidth' && style.selected].join(' ')}/>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <span className={style.columnTitle}>样式</span>
          <div className={style.inputArea}>
            <Select options={BorderStyleUtils} value={findStyle?.[BorderTypeUtils[borderSelect]?.borderStyle]}
                    onChange={value => handleUpdateStyle(BorderTypeUtils[borderSelect]?.borderStyle,value)}>
            </Select>
          </div>
        </div>
        <div className={style.row}>
          <span className={style.columnTitle}>线宽</span>
          <div className={style.inputArea}>
            <InputNumber min={0.1} max={99} value={findStyle?.[BorderTypeUtils[borderSelect]?.borderWidth]}
                         onChange={value => handleUpdateStyle(BorderTypeUtils[borderSelect]?.borderWidth,value)}/>
          </div>
        </div>
        <div className={style.row}>
          <span className={style.columnTitle}>颜色</span>
          <div className={style.inputArea}>
            <ColorPickerDropDown colorType={BorderTypeUtils[borderSelect]?.borderColor}>
              <IconFont className={style.selectColor} name="#icon-youqitiaoseban"/>
            </ColorPickerDropDown>
          </div>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}