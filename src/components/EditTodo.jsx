import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const EditTodo = ({ data: defaultData, open, onSave, onCancel }) => {
  const [data, setData] = useState(defaultData || {})
  const [errors, setErrors] = useState({
    name: null,
    deadline: null
  })

  const clearForm = () => {
    setData({
      name: '',
      description: '',
      deadline: null
    })
  }

  const clearErrors = () => {
    setErrors({
      name: '',
      description: '',
      deadline: null
    })
  }

  useEffect(() => {
    if (open) {
      clearErrors();
      if (!defaultData) {
        clearForm();
      } else {
        setData(defaultData)
      }
    }
  }, [defaultData, open]);

  const handleNameChange = (e) => {
    const { value } = e.target;
    if (value) {
      setErrors(errors => ({
        ...errors,
        name: null
      }))
    }
    setData((data) => ({
      ...data,
      name: e.target.value
    }));
  }

  const handleDescrChange = (e) => {
    const { value } = e.target;
    if (value) {
      setErrors(errors => ({
        ...errors,
        description: null
      }))
    }
    setData((data) => ({
      ...data,
      description: e.target.value
    }));
  }

  const handleDeadlineChange = (deadline) => {
    if (deadline) {
      setErrors(errors => ({
        ...errors,
        deadline: null
      }))
    }
    setData((data) => ({
      ...data,
      deadline
    }));
  };

  const handleCancel = () => {
    clearForm();
    clearErrors();
    onCancel();
  }

  const validateForm = () => {
    setErrors({
      name: !!data.name ? null : 'Name is required',
      deadline: !!data.deadline ? null : 'Deadline is required'
    })
    return !!data.name && !!data.description && !!data.deadline;
  }

  const handleSave = () => {
    const isValid = validateForm();
    if (isValid) {
      onSave(data);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {data.id ? 'Edit todo' : 'Add todo'}
        </DialogTitle>
        <DialogContent>
          <Grid sx={{ py: 1 }} container spacing={2} direction="column">
            <Grid item>
              <TextField
                fullWidth
                label="To do"
                color="secondary"
                required
                error={!!errors.name}
                helperText={errors.name}
                value={data.name}
                onInput={handleNameChange}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                color="secondary"
                value={data.description}
                onInput={handleDescrChange}
              />
            </Grid>
            <Grid item>
              <DesktopDatePicker
                label="Deadline"
                inputFormat="MM/dd/yyyy"
                value={data.deadline || null}
                onChange={handleDeadlineChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    error={!!errors.deadline}
                    helperText={errors.deadline}
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  )
}

export default EditTodo;
