import type { ButtonProps } from 'antd/lib/button';
import AntButton from 'antd/lib/button';
import type { ReactElement } from 'react';

export type ComposedButtonProps = ButtonProps & {
  text?: ReactElement;
};

const Button = (props: ComposedButtonProps) => {
  const { className, text, ...rest } = props;

  return (
    <AntButton className={className} {...rest}>
      {text}
    </AntButton>
  );
};

export { Button };
