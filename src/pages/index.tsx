import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'init-dayjs-webpack-plugin-entry.js';

import ProviderConfig from 'antd/es/config-provider';
import locale from 'antd/es/locale/zh_CN';
import DatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style/index';

import styles from './index.less';

dayjs.locale('zh-cn');

export default function IndexPage() {
  return (
    <div>
      <ProviderConfig locale={locale}>
        <h1 className={styles.title}>Page index</h1>
        <DatePicker
          onChange={(value) => {
            console.log(value);
          }}
        />
      </ProviderConfig>
    </div>
  );
}
