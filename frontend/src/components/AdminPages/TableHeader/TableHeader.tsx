import React from 'react';
import { TableHeaderProps } from './types';
import './styled.scss';

export const TableHeader: React.FC<TableHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="table-header-wrapper">
      <h4 className="table-header">{title}</h4>
      <div className="table-subheader">{subtitle}</div>
    </div>
  );
};
