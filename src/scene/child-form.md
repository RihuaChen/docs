## 子表单

子表单用于处理部分表单提交的情况，需要在外层包裹上`type = "object"`，主要用法参考以下 demo

```js
childForm: {
  type: 'object',
  properties: {
    childName1: {
      title: 'Child Name 1',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': [{ required: true, message: 'Child Name 1 is required' }],
    },
    childName2: {
      title: 'Child Name 2',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': [{ required: true, message: 'Child Name 2 is required' }],
    },
  },
},
```

---

<code src="./child-form.tsx"></code>
