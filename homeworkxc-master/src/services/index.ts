/*
 * @作者: 李洪文
 * @公司: 山东大学
 * @文件描述: 服务总封装
 * @LastEditors: Please set LastEditors
 * @Date: 2019-09-13 07:27:24
 * @LastEditTime: 2020-04-09 18:40:16
 */

import { PublicService } from './public.service';
import { DepartmentService } from './department.service';
import { LabService } from './lab.service';
import { EventService} from './hw.wervices';

export default {
  publicService: new PublicService(),
  departmentService: new DepartmentService(),
  labService: new LabService(),
  eventService:new EventService(),
};
