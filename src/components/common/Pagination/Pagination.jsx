import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { NavLink, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination({pages, currentPage, onPageChanged}) {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className={classes.root}>
      <Pagination 
      count={pages}
      page={currentPage}
      onChange={(event, number) => {
        onPageChanged(number) 
        navigate('/users/' + number)
      }}
      />
    </div>
  );
}
