import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function User({ user, ...props }) {
  return (    
    <StyledTableRow >
      <StyledTableCell component="th" scope="row">
       <NavLink style={{padding: '20px 20px 20px 0'}} to={'/edit/' + user.id}>
        <b>{user.name}</b>
        </NavLink>
      </StyledTableCell>
      <StyledTableCell align="right">{user.status}</StyledTableCell>
      <StyledTableCell align="right">{user.gender}</StyledTableCell>
      <StyledTableCell align="right">{user.email}</StyledTableCell>
    </StyledTableRow>
  );
}
