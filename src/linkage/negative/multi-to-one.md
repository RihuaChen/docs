# 多对一联动

多对一联动属于比较高级的操作，当多个条件同时成立时触发联动

核心的逻辑如下使用核心的 API: `onFormReact`, 在表单变化的时候进行监听，并使用`form.query`判断两个值

```ts
import { createForm, onFormReact } from '@formily/core';

onFormReact((form) => {
  form.setFieldState('inputC', (state) => {
    state.visible =
      form.query('selectA').value() === '1' &&
      form.query('selectB').value() === '1';
  });
});
```

下方 demo 显示了当`A`跟`B`同时选择`1`的时候显示`C`
<code src="./source/multi-to-one.tsx"></code>
