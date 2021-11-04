## 必填校验

必填校验有两种做法：一种是直接写 required, 一种是下边的写法, 推荐统一用下方写法

```ts
'x-validator': [
  { required: true, message: 'This field is required' }
]
```

---

<code src="./source/validator/validator.tsx"></code>

## 全局自定义校验规则案例

全局自定义校验主要通过 `core`里面的 `registerValidateRules`来注册自定义校验规则

```ts
import { registerValidateRules } from '@formily/core';

registerValidateRules({
  global_4(value) {
    if (!value) return '';
    if (value < 10) {
      return {
        type: 'error',
        message: '数值不能小于10',
      };
    } else if (value < 100) {
      return {
        type: 'warning',
        message: '数值在100以内',
      };
    } else if (value < 1000) {
      return {
        type: 'success',
        message: '数值大于100小于1000',
      };
    }
  },
});


'x-validator': {
  global_4: true,
}
```

<code src="./source/validator/global-style.tsx"></code>

## 异步校验

<code src="./source/validator/async-validate.tsx"></code>
