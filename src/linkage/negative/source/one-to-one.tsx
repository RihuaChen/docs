import React, { useMemo } from 'react';
import { createForm, onFieldReact, onFieldValueChange } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, Input, Select } from '@formily/antd';

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
    selectA: {
      title: 'A',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      enum: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
    inputB: {
      title: 'B',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-visible': false,
      'x-component-props': {
        placeholder: 'Please Input',
      },
    },
  },
};

export default () => {
  const form = useMemo(
    () =>
      createForm({
        effects() {
          onFieldReact('inputB', (field) => {
            field.visible = field.query('selectA').value() === '1';
          });
        },
      }),
    [],
  );
  return (
    <>
      <h2>一对一联动Demo</h2>
      <h3 style={{ height: '48px' }}>A选择1后显示B</h3>
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
};
