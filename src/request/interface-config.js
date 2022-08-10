export default {
  Interface: {
    common: {
      fileUpload: '/file/upload'
    }
  },
  Code: {
    success: 200,
    authorizationFailed: 401
  },
  MockData: {
    '/file/upload': {
      status: 200,
      data: 'https://sa-token-server.oss-cn-beijing.aliyuncs.com/20220614/2136bc9e-1166-4d76-b926-7a3e2d3bbb38.jpg',
      message: ''
    }
  }
}