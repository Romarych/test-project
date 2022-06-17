import React, { useState } from "react"
import TextField from '@mui/material/TextField'
import { Select } from '@mui/material'

export const Input = (props) => {

  const { input, meta, ...restProps } = props
  return <TextField {...input} {...restProps} id="standard-basic" />
}

// 
export const SelectField = ({
  input,
  label,
  children,
  ...custom
}) => {

  return (
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}  
          
    >
      {children}
    </Select>
  )
}