import React, { cloneElement } from 'react';

type Props = {
  children: React.ReactElement;
  className?: string;
};

const ClassProvider = ({ className, children }: Props) => {
  const generatedClassName = []
  generatedClassName.push(className, children.props.className)
  return cloneElement(children, {
    className : generatedClassName.join(' '),
  });
};
export default ClassProvider;
