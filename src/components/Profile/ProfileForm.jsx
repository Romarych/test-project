import { Button, TableBody } from '@material-ui/core'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, SelectField } from '../common/FormControls/FormControls'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem } from '@mui/material';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const ProfileForm = ({ handleSubmit, profile, onSubmit, ...props }) => {

console.log()

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Edit</h1>
      <form onSubmit={handleSubmit}>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell align="center" component="th" scope="row">
                  <Field placeholder='Name' name='name' validate={[]} component={Input} type='' />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Field  placeholder='Status' name='status' validate={[]} component={SelectField} type='' >
                    <option value={'active'}>Active</option>
                    <option value={'inactive'}>Inactive</option>
                  </Field>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Field  placeholder='Gender' name='gender' validate={[]} component={SelectField} type='' >
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                  </Field>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Field placeholder='Email' name='email' validate={[]} component={Input} type='' />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
          <Button style={{marginTop: 20}} type='submit' variant="contained" color="primary">Save</Button>
      </form>
    </>
  )
}

const ProfileReduxForm = reduxForm({ form: "profile", enableReinitialize: true })(ProfileForm)

export default ProfileReduxForm
