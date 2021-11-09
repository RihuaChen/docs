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
        placeholder: 'Please Select 1',
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
            const select = field.query('selectA').take();
            if (!select) return;
            const selectValue = select.value;
            select.loading = true;
            if (selectValue) {
              setTimeout(() => {
                select.loading = false;
                field.visible = selectValue === '1';
              }, 1000);
            }
          });
        },
      }),
    [],
  );
  return (
    <>
      <h2>异步联动Demo</h2>
      <h3>A选择1, 过一秒后显示B</h3>
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
