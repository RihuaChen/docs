import DemoTemplate from '../../components/DemoTemplate';

const schema = {
  type: 'object',
  properties: {
    BUTTON: {
      title: 'BUTTON',
      type: 'void',
      droppable: false,
      'x-component': 'Button',
      'x-component-props': {
        type: 'primary',
        text: 'MODAL OPEN',
        modal: 'MODAL',
        onClick:
          '{{()=>{$form.setFieldState($self.component[1].modal, state => {state.setComponentProps({visible: true})})}}}',
      },
    },
    MODAL: {
      title: 'MODAL',
      type: 'void',
      droppable: false,
      'x-component': 'Modal',
      'x-component-props': {
        visible: false,
        onCancel: '{{() => {$self.setComponentProps({visible: false})}}}',
      },
      properties: {
        paymentMethod: {
          title: '支付方式',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            placeholder: 'Please Input',
          },
          enum: [
            { label: '信用卡', value: '1' },
            { label: '借记卡', value: '2' },
            { label: '贷记卡', value: '3' },
          ],
        },
      },
    },
  },
};

export default () => <DemoTemplate schema={schema} />;
