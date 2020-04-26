/*
 * @文件描述: 通用处理
 * @公司: thundersdata
 * @作者: 李洪文
 * @Date: 2019-05-22 11:41:42
 * @LastEditTime: 2020-04-26 12:50:45
 * @LastEditors: Please set LastEditors
 */
import { message } from 'antd';
import { OptionItem } from '@/interfaces/component';
import lscache from 'lscache'
// export const BACKEND_URL = 'http://49.234.60.116:8080' ;
export const BACKEND_URL = 'http://127.0.0.1:8080';


//export function messageSuccess(msg: string) {}

export function messageFail(msg?: string) {
  message.error(msg || '服务调用失败，可能网络故障或者服务器宕机，请联系管理员');
}

export function getLocalStorageData(dictType: string): OptionItem[] {
  return lscache.get(dictType) || [];
}
