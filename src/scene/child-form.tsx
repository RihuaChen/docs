import React, { useState, useMemo } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, ISchema } from '@formily/react';
import { Form, FormButtonGroup, FormItem, Input, Select } from '@formily/antd';

import { Button } from 'antd';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
});

const schema: ISchema = {
  type: 'object',
  properties: {
    Name: {
      title: 'Name',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': [{ required: true, message: 'Name is required' }],
    },
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
          'x-validator': [
            { required: true, message: 'Child Name 1 is required' },
          ],
        },
        childName2: {
          title: 'Child Name 2',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'Please Input',
          },
          'x-validator': [
            { required: true, message: 'Child Name 2 is required' },
          ],
        },
      },
    },
  },
};

const SubmitDemo = () => {
  const [code, setCode] = useState({});
  const [childCode, setChildCode] = useState({});
  const form = useMemo(() => createForm({}), []);
  const submit = async () => {
    try {
      const values: object = await form.submit();
      setCode(values);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChildFormSubmit = async () => {
    try {
      form
        .query('childForm')
        .take()
        .submit((res) => {
          console.log(res);
          setChildCode(res);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h2>子表单demo</h2>
      <h3>
        Name为主表单的表单项，Child Name 1, Child Name 2为子表单的表单项目
      </h3>
      <h3>
        可以点击两个触发按钮分别体验子表单跟主表单触发的submit,
        同样子表单也可以触发validate方法
      </h3>
      <Form form={form} labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} />
        <FormButtonGroup.FormItem>
          <Button type="primary" onClick={handleChildFormSubmit}>
            Child Form Submit
          </Button>
        </FormButtonGroup.FormItem>
        <FormButtonGroup.FormItem>
          <div style={{ marginTop: '16px' }}>
            子表单提交结果:
            <code>
              <pre>{JSON.stringify(childCode, null, 2)}</pre>
            </code>
          </div>
        </FormButtonGroup.FormItem>
        <FormButtonGroup.FormItem>
          <Button type="primary" onClick={submit}>
            Submit
          </Button>
        </FormButtonGroup.FormItem>
        <FormButtonGroup.FormItem>
          <div style={{ marginTop: '16px' }}>
            主表单提交结果:
            <code>
              <pre>{JSON.stringify(code, null, 2)}</pre>
            </code>
          </div>
        </FormButtonGroup.FormItem>
      </Form>
    </>
  );
};

export default SubmitDemo;
