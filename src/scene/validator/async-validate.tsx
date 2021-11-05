import DemoTemplate from '@/components/DemoTemplate';

const asyncValidateFunc = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!value) {
        resolve('');
      }
      if (value === '123') {
        resolve('');
      } else {
        resolve('错误❎');
      }
    }, 1000);
  });
};

const schema = {
  type: 'object',
  properties: {
    asyncValidate: {
      title: '异步校验',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': { validator: '{{asyncValidateFunc}}' },
    },
    asyncValidateOnBlur: {
      title: '异步校验(onBlur触发)',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': {
        triggerType: 'onBlur',
        validator: '{{asyncValidateFunc}}',
      },
    },
  },
};

export default () => (
  <DemoTemplate schema={schema} scope={{ asyncValidateFunc }} />
);
