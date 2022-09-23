import React, {startTransition, useState, lazy, useSyncExternalStore, useEffect} from 'react'
import style from './index.pcss'
import {Drawer, Segmented} from 'antd'
import {menuTypeMap} from './store/menu-type'
import {useSelector} from 'react-redux'
import {controlsType} from '../../utils/controls-type'

const FontPanel = lazy(() => import('./components/font-panel'))
const RichEditPanel = lazy(() => import('./components/rich-edit-panel'))
const ImgPanel = lazy(() => import('./components/img-panel'))

export default _ => {

  const [selectTab, setSelectTab] = useState(1)

  const {selectControls, pageContentData} = useSelector(state => state.lowCodeData)

  useEffect(_ => {
    startTransition(_ => {
      setSelectTab(1)
    })
  }, [selectControls])

  const delaySetSelectTab = value => {
    startTransition(_ => {
      setSelectTab(value)
    })
  }

  const findSelectControls = _ => pageContentData.find(item => selectControls.includes(item.id))

  const componentLoad = _ => {
    if (selectControls.length === 1) {
      switch (findSelectControls()?.controls) {
        case controlsType.div.name:
          return <FontPanel selectTab={selectTab} className={style.none}/>
        case controlsType.richEdit.name:
          return <RichEditPanel selectTab={selectTab} className={style.none}/>
        case controlsType.img.name:
          return <ImgPanel selectTab={selectTab} className={style.none}/>
        default:
          return <></>
      }
    }
    return <></>
  }

  const segmentedOptions = _ => {
    const controls = findSelectControls()?.controls
    return controls ? Object.entries(menuTypeMap[controls]).map(item => item[1]) : []
  }

  return (
    <Drawer
      title="操作面板"
      placement="right"
      closable={false}
      visible={selectControls.length === 1}
      mask={false}
      getContainer={false}
      className={style.init}
    >
      <div className={style.drawerArea}>
        <div className={style.segmented}>
          <Segmented value={selectTab} onChange={value => delaySetSelectTab(value)}
                     options={segmentedOptions()}/>
        </div>
        <React.Suspense>
          {componentLoad()}
        </React.Suspense>
      </div>
    </Drawer>
  )
}