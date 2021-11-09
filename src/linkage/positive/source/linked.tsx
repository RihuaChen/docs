import React, { useMemo } from 'react';
import { createForm, onFieldValueChange } from '@formily/core';
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
        placeholder: 'Please Select 1',
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
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Please Select 1',
      },
      enum: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
    selectC: {
      title: 'C',
      type: 'string',
      'x-visible': false,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Please Select',
      },
      enum: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
  },
};

export default () => {
  const form = useMemo(
    () =>
      createForm({
        effects() {
          onFieldValueChange('selectA', (field) => {
            form.setFieldState('selectB', (state) => {
              state.visible = field.value === '1';
            });
          });
          onFieldValueChange('selectB', (field) => {
            form.setFieldState('selectC', (state) => {
              state.visible = field.value === '1';
            });
          });
        },
      }),
    [],
  );
  return (
    <>
      <h2>链式联动Demo</h2>
      <div style={{ height: '48px' }}> A选择1显示B, B选择1显示C</div>
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
