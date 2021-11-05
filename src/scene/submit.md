提交表单作为最常用的场景，我们放在第一个，主要是通过 `form.submit()` 来提交

返回的是一个 Promise, 推荐使用 async await 的语法来写

<!-- <code src="./source/submit.tsx"></code> -->

```tsx
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
        <FormButtonGroup.FormItem>
          <Button type="primary" onClick={submit}>
            Submit
          </Button>
        </FormButtonGroup.FormItem>
        <FormButtonGroup.FormItem>
          <div style={{ marginTop: '16px' }}>
            提交结果:
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
```
