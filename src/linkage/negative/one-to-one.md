# 被动联动

1. 被动联动是指某个表单项依赖于其他表单项，业务逻辑写到被触发的表单项上，最适合多对一的场景

2. 被动联动更倾向于响应式的写法，类似于监听器的写法

3. 一对一联动是最简单的场景，我们看下被动联动，与主动最大的区别的是核心 API 变成 `onFieldReact`

```js
import { onFieldReact } from '@formily/core';

// 被动联动方法onFieldReact，'selectA'是路径，后边我们会讲到路径系统

onFieldReact('inputB', (field) => {
  field.visible = field.query('selectA').value() === '1';
});
```

<code src="./source/one-to-one.tsx"></code>
