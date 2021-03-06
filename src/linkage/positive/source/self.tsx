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
        placeholder: 'Select to Change Size',
        allowClear: true,
      },
      enum: [
        { label: 'large', value: 'large' },
        { label: 'middle', value: 'middle' },
        { label: 'small', value: 'small' },
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
            field.setComponentProps({
              size: field.value,
            });
          });
        },
      }),
    [],
  );
  return (
    <>
      <h2>自身联动Demo</h2>
      <h3 style={{ height: '48px' }}>选择不同size改变自身尺寸</h3>
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
