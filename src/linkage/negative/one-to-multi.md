# 一对多联动

一对多联动也是比较常用的联动，用于基于一个触发多个联动方式，这边我们以支付方式做例子举例，我们有信用卡、借记卡、贷记卡三种支付方式，每种支付方式要填不同的信息

### 方式一：我们用到了取巧的方式，一种是把所有要联动的多个放到一个虚拟节点里，这种方式适合用于分组处理，把一对多降为一对一联动

具体操作，将 creditCardNO，validateNO 放到虚拟节点 CREDIT_CARD_INFO 中

```js
import { onFieldReact } from '@formily/core';

onFieldReact('CREDIT_CARD_INFO', (field) => {
  field.visible = field.query('paymentMethod').value() === '1';
});
onFieldReact('DEBIT_CARD_INFO', (field) => {
  field.visible = field.query('paymentMethod').value() === '2';
});
onFieldReact('LOAN_CARD_INFO', (field) => {
  field.visible = field.query('paymentMethod').value() === '3';
});

// 分组处理，将creditCardNO，validateNO放到虚拟节点CREDIT_CARD_INFO中
CREDIT_CARD_INFO: {
  type: 'void',
  'x-visible': false,
  properties: {
    creditCardNO: {
      title: '信用卡号',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    validateNO: {
      title: '校验码后三位',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
  },
};
```

<code src="./source/one-to-multi.tsx"></code>

## 方式二：不分组的一对多联动，使用到了路径系统，这里可以一次性匹配到多个 Field

这里不再有分组处理的逻辑, 使用路径系统实现了跟上个例子相同的功能

```js
import { onFieldReact } from '@formily/core';

onFieldReact('*(creditCardNO,validateNO)', (field) => {
  field.visible = field.query('paymentMethod').value() === '1';
});
onFieldReact('*(debitCardNO,debitCardPhoneNO)', (field) => {
  field.visible = field.query('paymentMethod').value() === '1';
});
onFieldReact('*(loanCardNO,loanCardPhoneNO)', (field) => {
  field.visible = field.query('paymentMethod').value() === '1';
});
```

<code src="./source/one-to-multi-2.tsx"></code>
