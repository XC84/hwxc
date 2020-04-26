import * as React from 'react';
import { Input, Button,Select } from 'antd';
import styles from './index.scss';
import { EventSearchProps } from '@/interfaces/hw';

interface SearchFilterProps {
  searchProps: EventSearchProps;
  changeSearchProps: (searchProps: EventSearchProps) => void;
  onSearch: () => void;
}
const { Option } = Select;

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
    return (
      <div className={styles.filterPanel}>
        <div className={styles.filterItem}>
          <span className={styles.label}>比赛项目名称: </span>
          <Input
            allowClear={true}
            value={searchProps.eventName}
            placeholder="请输入比赛项目名称"
            onChange={e => changeSearchProps({ eventName: e.target.value })}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>代表队编码：</span>
          <Select defaultValue="bala" style={{ width: 120 }}>
      <Option value="bala">bala</Option>
      <Option value="balabala">balabala</Option>
      <Option value="balabalabala" >
       balabalabala
      </Option>
      <Option value="mie">mie</Option>
    </Select>
        </div>  

          <div className={styles.filterItem}>
          <span className={styles.label}>注册号：</span>
          <Input
            allowClear={true}
            value={searchProps.regCode}
            placeholder="请输入注册号"
            onChange={e => changeSearchProps({ regCode: e.target.value })}
            />
          </div>

          
          
          <div className={styles.filterItem}>
          <span className={styles.label}>证件号：</span>
          <Input
            allowClear={true}
            value={searchProps.idNumber}
            placeholder="请输入证件号"
            onChange={e => changeSearchProps({ idNumber: e.target.value })}
          />

        </div>

        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
    }

}