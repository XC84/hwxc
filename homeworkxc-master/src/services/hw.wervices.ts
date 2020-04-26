/*
 * @Author: your name
 * @Date: 2020-04-09 15:04:33
 * @LastEditTime: 2020-04-26 16:12:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\services\hw.wervices.ts
 */
import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import {
  EventModel,
  EventEditModel,
  EventSearchProps,
} from '@/interfaces/hw';

import { hwStore } from '@/stores/hw.store';

export class EventService {
  public store: hwStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new hwStore();
  }

  @action
  public async fetchPageData(searchProps: EventSearchProps): Promise<boolean> {
    this.store.loading = true;
    this.store.pageData = initalPaginationValue;
    try {
      const result = await this.http.postJSON<Pagination<EventModel>>(
        `${BACKEND_URL}/hw/list`,
        searchProps,
      );
      this.store.loading = false;
      if (result.success) {
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      messageFail();
      return false;
    }
  }

  @action
  public async update(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/hw/update`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async add(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/hw/add`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async delete(codeList: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/hw/delete`, codeList);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
}