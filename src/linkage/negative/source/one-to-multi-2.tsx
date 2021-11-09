import React from 'react';
import { createForm, onFieldReact } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, Input, Select } from '@formily/antd';

const form = createForm({
  effects() {
    onFieldReact('*(creditCardNO,validateNO)', (field) => {
      field.visible = field.query('paymentMethod').value() === '1';
    });
    onFieldReact('*(debitCardNO,debitCardPhoneNO)', (field) => {
      field.visible = field.query('paymentMethod').value() === '1';
    });
    onFieldReact('*(loanCardNO,loanCardPhoneNO)', (field) => {
      field.visible = field.query('paymentMethod').value() === '1';
    });
  },
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
});

const schema = {
  type: 'object',
  properties: {
    paymentMethod: {
      title: '支付方式',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      enum: [
        { label: '信用卡', value: '1' },
        { label: '借记卡', value: '2' },
        { label: '贷记卡', value: '3' },
      ],
    },
    creditCardNO: {
      title: '信用卡号',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    validateNO: {
      title: '校验码后三位',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    debitCardNO: {
      title: '借记卡号',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    debitCardPhoneNO: {
      title: '借记卡预留手机号',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    loanCardNO: {
      title: '贷记卡号',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
    loanCardPhoneNO: {
      title: '贷记卡预留手机号',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
  },
};

export default () => (
  <>
    <h2>一对多联动Demo：（不分组）</h2>
    <h3 style={{ height: '48px' }}>
      支付方式选择不同方式，联动多个不同的输入信息
    </h3>
    <Form form={form}>
      <SchemaField schema={schema} />
      <FormConsumer>
        {() => (
          <code>
            <pre>{JSON.stringify(form.values, null, 2)}</pre>
          </code>
        )}
      </FormConsumer>
    </Form>
  </>
);
