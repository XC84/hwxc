/*
 * @文件描述: 面包屑配置
 * @公司: 山东大学
 * @作者: 李洪文
 * @Date: 2019-05-22 11:41:42
 * @LastEditTime: 2020-04-09 14:23:54
 * @LastEditors: Please set LastEditors
 */
export default {
  // '/': '首页',
  '/homework': '比赛管理',
  '/homework/hw': '比赛项目管理',

  '/base': '基础管理',
  '/base/lab': '实验室管理',
  '/base/task': '实验任务管理',
  '/base/upload': '上传管理',
  '/base/images': '图片管理',
  '/base/search': '图片搜索',


  '/spider': '数据采集',
  '/spider/log': '采集历史',
  '/spider/task': '采集状态',
  '/spider/itemList': '拍品信息',

};

/**
 * 不可点击的面包屑
 */
export const excludePaths = ['/base', '/spider'];
