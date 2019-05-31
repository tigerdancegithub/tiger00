import request from '@/request'

//获取首页数据
export function apiGetHome() {
  return request({
    url: '/cityList',
    method: 'get'
  })
}