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

type DemoTemplateProps = {
  schema: ISchema;
  scope?: any;
};

const ValidatorDemo: React.FC<DemoTemplateProps> = (props) => {
  const { schema, scope } = props;
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
        <SchemaField schema={schema} scope={scope} />
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

export default ValidatorDemo;
