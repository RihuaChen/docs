import type { ModalProps } from 'antd';
import { Modal as AntdModal } from 'antd';
import React from 'react';

type FormilyModalProps = ModalProps & {
  children: React.ReactNode;
};

const createModal = (props: FormilyModalProps) => {
  const { children, ...rest } = props;
  return <AntdModal {...rest}>{props.children}</AntdModal>;
};

const Modal = (props: FormilyModalProps) => {
  return <>{createModal(props)}</>;
};

export { Modal };
