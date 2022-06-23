import React from 'react'
import User from './User/User'
import BasicPagination from '../common/Pagination/Pagination'
import SimpleSelect from './SimpleSelect/SimpleSelect'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { TableBody } from '@mui/material';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



const Users = (props) => {
  const [gender, setGender] = React.useState('');
  const filterGender = (props) => {
    setGender(props)
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Users</h1>
      <SimpleSelect gender={gender} filterGender={filterGender} />
      <TableContainer style={{marginBottom: 20}}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gender == 'male' | gender == 'female'
              ? props.users.filter(user => user.gender == gender)
                .map(user => <User key={user.id} user={user} {...props} />)
              : props.users.map(user => <User key={user.id} user={user} {...props} />)}
          </TableBody>
        </Table>
      <BasicPagination pages={props.pages} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
      </TableContainer>
    </>
  )
}

export default Users