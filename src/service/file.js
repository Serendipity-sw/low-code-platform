import axios from 'axios'
import InterfaceConfig from '../request/interface-config'

export const FileUpload = file => {
  const formData = new FormData()
  formData.append( 'file', file )
  return axios.post( InterfaceConfig.Interface.common.fileUpload, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  } )
}