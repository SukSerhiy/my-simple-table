import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Filter = ({ value, onChange }) => {
  return (
    <Box sx={{ my: 1 }}>
      <TextField
        value={value}
        onInput={onChange}
        fullWidth
        label="Search"
      />
    </Box>
  )
}

export default Filter;
