# 自身联动

1. 自身联动使用的场景会比较少，场景上是改变自身的某些状态

2. 原理就是改变自身`field`上的`'x-component-props'`，也就是改变组件的`props`来实现的

3. 下边这个案例选择不同的`尺寸`会改变 `Select` 组件的大小

```js
import { onFieldValueChange } from '@formily/core';

// 核心就是 field.setComponentProps()方法, 注意参数是个对象
onFieldValueChange('selectA', (field) => {
  field.setComponentProps({
    size: field.value,
  });
});
```

<code src="./source/self.tsx"></code>
