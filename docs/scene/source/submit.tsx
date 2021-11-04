import React, { useState, useMemo } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, ISchema } from '@formily/react';
import { Form, FormItem, Input, Select } from '@formily/antd';

import { Button } from 'antd';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
});

// 最小的 Schema 样例
const schema: ISchema = {
  type: 'object',
  properties: {
    // name： key名称，不可重复，跟后端字段是对应的
    name: {
      // 显示名称
      title: 'name',
      // 字段类型
      type: 'string',
      // 装饰器名称
      'x-decorator': 'FormItem',
      // 组件名
      'x-component': 'Input',
      // 组件props
      'x-component-props': {
        placeholder: 'Please Input',
      },
      // 组件校验规则
      'x-validator': [{ required: true, message: 'Input1 is required' }],
    },
  },
};

const SubmitDemo = () => {
  const [code, setCode] = useState({});
  const form = useMemo(() => createForm({}), []);
  const submit = async () => {
    try {
      const values: object = await form.submit();
      setCode(values);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form form={form} labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} />
      </Form>
      <Button type="primary" onClick={submit}>
        Submit
      </Button>
      <code>
        <pre>{JSON.stringify(code, null, 2)}</pre>
      </code>
    </>
  );
};

export default SubmitDemo;
