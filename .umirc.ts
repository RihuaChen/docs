import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Formily - V2 Docs',
  base: '/docs/',
  publicPath: '/docs/',
  mode: 'site',
  mfsu: {},
  // more config: https://d.umijs.org/config
  menus: {
    '/start': [
      {
        title: '快速开始',
        path: '/start',
      },
    ],
    '/scene': [
      {
        title: 'scene',
        children: [
          { title: '提交表单', path: '/scene/submit' },
          { title: '校验', path: '/scene/validator' },
        ],
      },
    ],
    '/scaffold': [
      {
        title: '推荐脚手架模板',
        path: '/scaffold',
      },
    ],
    '/linkage': [
      {
        title: '主动联动',
        children: [
          { title: '一对一联动', path: '/linkage/positive/one-to-one' },
          { title: '一对多联动', path: '/linkage/positive/one-to-multi' },
          { title: '多对一联动', path: '/linkage/positive/multi-to-one' },
          { title: '多对多联动', path: '/linkage/positive/multi-to-multi' },
          { title: '链式联动', path: '/linkage/positive/linked' },
          { title: '异步联动', path: '/linkage/positive/async' },
          { title: '自身联动', path: '/linkage/positive/self' },
        ],
      },
      {
        title: '被动联动',
        children: [
          { title: '一对一联动', path: '/linkage/negative/one-to-one' },
          { title: '一对多联动', path: '/linkage/negative/one-to-multi' },
          { title: '多对一联动', path: '/linkage/negative/multi-to-one' },
          { title: '多对多联动', path: '/linkage/negative/multi-to-multi' },
          { title: '链式联动', path: '/linkage/negative/linked' },
          { title: '异步联动', path: '/linkage/negative/async' },
          { title: '自身联动', path: '/linkage/negative/self' },
        ],
      },
    ],
  },
});
