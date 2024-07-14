import React from 'react';
import PropTypes from 'prop-types';
import { TableWrap } from './Table.styles';

const Table = ({ columns, data, border }) => {
  return (
    <TableWrap border={border}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.header}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  border: PropTypes.bool, // Define the prop type for border
};

export default Table;
