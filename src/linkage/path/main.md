# 路径系统 FormPath

## 简介

路径匹配系统主要解决字段路径的匹配问题，这边主要是列举一些常用的路径，如果需要更多更高级的用法可以参考 formily 官方站点的介绍 [FormPath](https://core.formilyjs.org/zh-CN/api/entry/form-path)

## 常用路径

### 直接匹配

直接匹配某个字段 `'inputA'`， 或者是某一组字段`CREDIT_CARD_INFO`

### 一组匹配

一般用 `*()` 语法， 比如 `*(inputA,inputB,inputC)`

### 前缀匹配

一般用于一组通用前缀的匹配, 比如 `~creditCard`, 表示匹配以 **creditCard** 开头的一组字段

### 相邻匹配

一般用于 array 类型的组件里面，匹配相邻的字段比如以下组件，我们可以用 `inputs.*.selectA` 来匹配 ArrayCards 里面的每一个 selectA

```js
const schema = {
  type: 'object',
  properties: {
    inputs: {
      type: 'array',
      'x-component': 'ArrayCards',
      items: {
        type: 'object',
        properties: {
          selectA: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
          },
          inputA: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
          },
          inputB: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
          },
        },
      },
    },
  },
};
```
