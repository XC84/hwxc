/*
 * @Author: your name
 * @Date: 2020-04-09 15:05:55
 * @LastEditTime: 2020-04-15 17:07:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\stores\hw.store.ts
 */
import { observable } from 'mobx';
import {EventModel} from '@/interfaces/hw';

import { Pagination, initalPaginationValue } from '@/interfaces/common';

export class EventStore {
  // 正在获取数据状态
  @observable
  public loading: boolean;

  // 部门分页列表数据
  @observable
  public pageData: Pagination<EventModel> = initalPaginationValue;

}
