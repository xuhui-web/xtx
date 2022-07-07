import request from '@/utils/request'

/**
 * 获取品牌数据
 */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物
 */
export const findNew = () => {
  return request('home/new', 'get')
}

/**
 * 获取人气推荐
 */
export const findHot = () => {
  return request('home/hot', 'get')
}
