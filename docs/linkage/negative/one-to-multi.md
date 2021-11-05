# 主动联动 => 一对多联动

1. 联动表单处理中是必不可少的章节，主动联动是指 选项 `A`选择了`第一项`，然后显示 `B` 选项，

   - 把逻辑写到 A 字段是就是`主动联动`
   - 与之相反，逻辑如果写到 B 上边就是`被动联动`

2. 一对一联动是最简单的场景，我们看下这个场景

```js
import { onFieldValueChange } from '@formily/core';

// 主动联动方法onFieldValueChange，'selectA'是路径，后边我们讲到路径系统

onFieldValueChange('selectA', (field) => {
  form.setFieldState('inputB', (state) => {
    //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
    state.visible = field.value === '1';
  });
});
```

<code src="./source/one-to-one.tsx"></code>
