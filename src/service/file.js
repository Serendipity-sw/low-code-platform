import axios from 'axios'
import InterfaceConfig from '../request/interface-config'
import configureStore from '../reducers/configureStore'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../page/index/store/lowCodeDataReducers'

export const FileUpload = file => {
  const formData = new FormData()
  formData.append( 'file', file )
  return axios.post( InterfaceConfig.Interface.common.fileUpload, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  } )
}

export const SelectFileImageFileUpload = selectCanvasControl => {
  let fileDom = document.createElement( 'input' )
  fileDom.type = 'file'
  fileDom.accept = 'image/*'
  fileDom.addEventListener( 'change', event => {
    if ( event.target?.files?.length ) {
      FileUpload( event.target.files[0] ).then( result => {
        const { lowCodeData: { selectControls, pageContentData } } = configureStore.getState()
        const list = cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
        list.forEach( item => {
          item.src = result.data
        } )
        configureStore.dispatch( EditPageItemList( list ) )
      } )
    }
  } )
  fileDom.click()
}