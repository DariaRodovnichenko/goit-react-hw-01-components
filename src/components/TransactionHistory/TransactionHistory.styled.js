import styled from 'styled-components';

export const TableContainer = styled.div`
  padding: 32px 15px;
`;

export const TransactionsTable = styled.table`
  text-transform: capitalize;
  width: 500px;
  padding: 32px 15px;
  border-collapse: collapse;
  border: 4px solid lightsteelblue;
`;

export const TableHead = styled.thead`
  font-size: 18px;
  color: navy;
  text-transform: uppercase;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid lightsteelblue;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: seashell; /* Light gray background for even rows */
  }

  tr:nth-child(odd) {
    background-color: snow; /* White background for odd rows */
  }

  td {
    padding: 10px;
    border: 1px solid lightsteelblue;
    text-align: center;
    color: navy;
  }
`;
