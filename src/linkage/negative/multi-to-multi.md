# 多对多联动

多对多联动在多对一的联动上的用上路径系统, 当多个条件同时成立时触发联动多个表单项

核心的逻辑是使用核心的 API: `onFormReact`, 在表单变化的时候进行监听，并使用`form.query`判断两个值

```ts
import { onFieldReact } from '@formily/core';

onFieldReact('*(inputC,inputD)', (field) => {
  field.visible =
    field.query('selectA').value() === '1' &&
    field.query('selectB').value() === '1';
});
```

下方 demo 显示了当`A`跟`B`同时选择`1`的时候显示输入框`C`和`D`
<code src="./source/multi-to-multi.tsx"></code>
