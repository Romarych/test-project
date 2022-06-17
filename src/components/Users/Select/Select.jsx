import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gender}
                onChange={handleChange}
                label="Gender"
            >
                <MenuItem 
                    onClick={() => props.filterGender('none')} 
                    value={'none'}>None</MenuItem>
                <MenuItem 
                    onClick={() => props.filterGender('female')} 
                    value={'female'}>Female</MenuItem>
                <MenuItem 
                    onClick={() => props.filterGender('male')}
                    value={'male'}>Male</MenuItem>
            </Select>
            </FormControl>
    )
}
