import React, {useState} from 'react'
import style from './index.pcss'
import {message, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons"
import IconFont from "../../../../../../../../components/icon-font"
import {cloneDeep, throttle} from "lodash"
import {useDispatch, useSelector} from "react-redux"
import {EditPageItemList} from "../../../../../../store/lowCodeDataReducers"
import {FileUpload} from "../../../../../../../../service/file"

export default props => {

  const {selectControls, pageContentData} = useSelector(state => state.lowCodeData)

  const dispatch = useDispatch()

  const [uploadLoading, setUploadLoading] = useState(false)

  const filterItem = cloneDeep(pageContentData.filter(item => selectControls.includes(item.id)))

  const handleDelBgImg = _ => {
    filterItem.forEach(item => {
      item.src = ''
    })
    dispatch(EditPageItemList(filterItem))
  }

  const beforeUpload = file => {
    if (file.type.split('/')[0] !== 'image') {
      message.error('上传文件格式错误,只支持图片格式!')
      return false
    }
    setUploadLoading(true)
    FileUpload(file).then(result => {
      filterItem.forEach(item => {
        item.src = result.data
      })
      dispatch(EditPageItemList(filterItem))
    }).finally(_ => setUploadLoading(false))
    return false
  }

  return (
    <div className={[style.init, props.className].join(' ')}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        accept="image/*"
        showUploadList={false}
        beforeUpload={beforeUpload}
      >
        {filterItem?.[0]?.src ? (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundSize: '100% 100%',
            backgroundImage: `url(${filterItem?.[0]?.src})`
          }}/>
        ) : (
          <div>
            {uploadLoading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div
              style={{
                marginTop: 8
              }}
            >
              图片上传
            </div>
          </div>
        )}
      </Upload>
      <IconFont className={[style.delBtn, filterItem?.[0]?.src || style.none].join(' ')}
                name="#icon-shanchu1" onClick={throttle(handleDelBgImg, 200)}/>
    </div>
  )
}