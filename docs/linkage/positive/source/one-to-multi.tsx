import React from 'react';
import { createForm, onFieldValueChange } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, Input, Select } from '@formily/antd';

const form = createForm({
  effects() {
    onFieldValueChange('paymentMethod', (field) => {
      form.setFieldState('CREDIT_CARD_INFO', (state) => {
        state.visible = field.value === '1';
      });
      form.setFieldState('DEBIT_CARD_INFO', (state) => {
        state.visible = field.value === '2';
      });
      form.setFieldState('LOAN_CARD_INFO', (state) => {
        state.visible = field.value === '3';
      });
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
    },
    DEBIT_CARD_INFO: {
      type: 'void',
      'x-visible': false,
      properties: {
        debitCardNO: {
          title: '借记卡号',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'Please Input',
          },
        },
        debitCardPhoneNO: {
          title: '借记卡预留手机号',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'Please Input',
          },
        },
      },
    },
    LOAN_CARD_INFO: {
      type: 'void',
      'x-visible': false,
      properties: {
        loanCardNO: {
          title: '贷记卡号',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'Please Input',
          },
        },
        loanCardPhoneNO: {
          title: '贷记卡预留手机号',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'Please Input',
          },
        },
      },
    },
  },
};

export default () => (
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
);
