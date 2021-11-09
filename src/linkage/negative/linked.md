# 链式联动

1. 链式联动是一对一联动的升级版本，具体我们看下面这个场景，`A`选择`1`, 显示`B`,`B`在选择`1`, 显示出`C`

2. 被动联动跟主动联动的区别是，主动写在 A、B 上，被动写在 B、C 上

```js
import { onFieldValueChange } from '@formily/core';

onFieldReact('selectB', (field) => {
  field.visible = field.query('selectA').value() === '1';
});
onFieldReact('selectC', (field) => {
  field.visible = field.query('selectB').value() === '1';
});
```

---

<code src="./source/linked.tsx"></code>
