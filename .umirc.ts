import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Formily - V2 Docs',
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
        title: '联动',
        path: '/linkage',
      },
    ],
  },
});
