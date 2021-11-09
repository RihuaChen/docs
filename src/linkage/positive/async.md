# 异步联动

1. 异步联动就是一般就是在 onFieldValueChange 方法里面进行异步操作即可
2. 该 demo 使用 setTimeout 模拟异步数据源

```js
import { onFieldValueChange } from '@formily/core';

// 异步联动就是一般就是在onFieldValueChange方法里面进行异步操作即可

onFieldValueChange('selectA', (field) => {
  field.loading = true;
  setTimeout(() => {
    form.setFieldState('inputB', (state) => {
      state.visible = field.value === '1';
      field.loading = false;
    });
  }, 1000);
});
```

<code src="./source/async.tsx"></code>
