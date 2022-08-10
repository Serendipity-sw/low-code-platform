import axios from 'axios'
import { throttle } from 'lodash'
import { message, notification } from 'antd'
import interfaceConfig from './interface-config'
import { mock } from 'mockjs'

const mockProcess = ( url ) => {
  const data = interfaceConfig.MockData[url]
  if ( data ) {
    return mock( data )
  }
  return ''
}

const rejectMessage = throttle( _ => {
  notification.error( {
    message: `接口异常反馈${ Enable_Mock ? '将开始启用模拟数据' : '' }`,
    description:
      '请求接口异常或没有响应,请联系系统管理员!'
  } )
}, 1500 )

const outLoginMessage = throttle( _ => {
  notification.error( {
    message: '登陆信息异常',
    description:
      '登录信息失效!请重新登录'
  } )
}, 2000 )

axios.interceptors.request.use( config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject( error )
} )

axios.interceptors.request.use(
  config => {
    config.timeout ||= 3000
    // 设置统一的请求头

    return config
  },
  error => {
    return Promise.reject( error )
  }
)
axios.interceptors.response.use( response => {
    // 对响应数据做点什么
    switch ( response.data.code ) {
      case interfaceConfig.Code.success:
        return Promise.resolve( response.data )
      case interfaceConfig.Code.authorizationFailed:
        outLoginMessage()
        return Promise.reject( response.data )
      default:
        message.error( response.data?.message )
        return Promise.reject( response.data )
    }
  }, error => {
    rejectMessage()
    if ( Enable_Mock ) {
      return Promise.resolve( mockProcess( error.config.url, Promise.resolve ) )
    }
    // 对响应错误做点什么
    return Promise.reject( error )
  }
)