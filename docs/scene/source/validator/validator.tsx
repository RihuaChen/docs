import DemoTemplate from '../../components/DemoTemplate';

const schema = {
  type: 'object',
  properties: {
    require: {
      title: '必填',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': [{ required: true, message: 'This field is required' }],
    },
    requiredAndRegex: {
      title: '必填且带规则(此处为英文)',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Please Input',
      },
      'x-validator': [
        { required: true, message: 'This field is required' },
        {
          pattern: /^[a-zA-Z]*$/,
          message: 'Input must be EN',
        },
      ],
    },
  },
};

export default () => <DemoTemplate schema={schema} />;
