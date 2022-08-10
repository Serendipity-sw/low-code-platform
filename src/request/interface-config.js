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
      data: 'https://cn.news.blizzard.com/zh-cn/world-of-warcraft/17952962/%E3%80%8A%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C%E3%80%8B%E7%BB%8F%E5%85%B8%E6%80%80%E6%97%A7%E6%9C%8D%E7%8E%B0%E5%B7%B2%E5%BC%80%E6%9C%8D',
      message: ''
    }
  }
}