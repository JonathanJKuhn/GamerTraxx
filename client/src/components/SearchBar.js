import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const SearchBar = () => {
  return (
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 4, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
    >
        <TextField id="standard-basic" label="Search Games" variant="filled"/>

    </Box>
  )
}

export default SearchBar