# 链式联动

1. 链式联动是一对一联动的升级版本，具体我们看下面这个场景，`A`选择`1`, 显示`B`,`B`在选择`1`, 显示出`C`

```js
import { onFieldValueChange } from '@formily/core';

// 主动联动方法onFieldValueChange，'selectA'是路径，后边我们讲到路径系统

onFieldValueChange('selectA', (field) => {
  form.setFieldState('selectB', (state) => {
    state.visible = field.value === '1';
  });
});
onFieldValueChange('selectB', (field) => {
  form.setFieldState('selectC', (state) => {
    state.visible = field.value === '1';
  });
});
```

---

<code src="./source/linked.tsx"></code>
