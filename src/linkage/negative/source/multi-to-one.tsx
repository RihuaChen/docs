import React, { useMemo } from 'react';
import { createForm, onFieldReact } from '@formily/core';
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
        placeholder: 'Please select 1',
      },
      enum: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
    selectB: {
      title: 'B',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Please select 1',
      },
      enum: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
    inputC: {
      title: 'C',
      type: 'string',
      visible: false,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-visible': false,
      'x-component-props': {
        placeholder: 'I will show when A equal to 1 and B equal to 1',
      },
    },
  },
};

export default () => {
  const form = useMemo(
    () =>
      createForm({
        effects() {
          onFieldReact('inputC', (field) => {
            field.visible =
              field.query('selectA').value() === '1' &&
              field.query('selectB').value() === '1';
          });
        },
      }),
    [],
  );
  return (
    <>
      <h2>多对一Demo</h2>
      <div style={{ height: '48px' }}> A选择1, B选择1, 显示C</div>
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
