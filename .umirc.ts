import path from 'path';
import { defineConfig } from 'umi';
// @ts-ignore
import DayjsPlugin from 'umi-preset-vite/lib/vitePlugins/dayjs';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  alias: {
    moment: 'dayjs',
  },
  vite: {
    optimizeDeps: {},
    plugins: [
      DayjsPlugin({
        plugins: [
          'isSameOrBefore',
          'isSameOrAfter',
          'isToday',
          'isTomorrow',
          'isYesterday',
          'advancedFormat',
          'customParseFormat',
          'weekday',
          'weekYear',
          'weekOfYear',
          'isMoment',
          'localeData',
          'localizedFormat',
          'badMutable',
        ],
      }),
    ],
  },
  commonjsModules: ['fast-deep-equal/index.js'],
  fastRefresh: {},
});
