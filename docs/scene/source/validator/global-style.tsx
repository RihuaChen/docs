import DemoTemplate from '../../components/DemoTemplate';
import { registerValidateRules } from '@formily/core';

registerValidateRules({
  global_1(value) {
    if (!value) return '';
    return value !== '123' ? '错误了❎' : '';
  },
  global_2(value, rule) {
    if (!value) return '';
    return value !== '123' ? rule.message : '';
  },
  global_3(value) {
    if (!value) return '';
    return value === '123';
  },
  global_4(value) {
    if (!value) return '';
    if (value < 10) {
      return {
        type: 'error',
        message: '数值不能小于10',
      };
    } else if (value < 100) {
      return {
        type: 'warning',
        message: '数值在100以内',
      };
    } else if (value < 1000) {
      return {
        type: 'success',
        message: '数值大于100小于1000',
      };
    }
  },
});
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
      'x-validator': {
        global_4: true,
      },
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
