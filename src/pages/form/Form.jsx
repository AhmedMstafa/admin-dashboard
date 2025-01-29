import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default function Form() {
  const [access, setaccess] = useState(3);
  const [isSnakOpen, setSnakOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit() {
    console.log('done');
    handleClick();
  }

  const handleChange = (event) => {
    setaccess(event.target.value);
  };

  function handleClick() {
    setSnakOpen(true);
  }

  function handleClose() {
    setSnakOpen(false);
  }
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack direction={'row'} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          name="first-name"
          helperText={
            errors.firstName ? 'This field is required & min 3 character' : null
          }
          error={Boolean(errors.firstName)}
          {...register('firstName', { required: true, minLength: 3 })}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          name="last-name"
          helperText={
            errors.lastName ? 'This field is required & min 3 character' : null
          }
          error={Boolean(errors.lastName)}
          {...register('lastName', { required: true, minLength: 3 })}
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        name="email"
        helperText={
          errors.Email ? 'Please provide a valid email address' : null
        }
        error={Boolean(errors.Email)}
        {...register('Email', {
          required: true,
          pattern: emailRegex,
        })}
      />

      <TextField
        label="Contact Number"
        variant="filled"
        name="number"
        helperText={
          errors.Number ? 'Please provide a valid phone number' : null
        }
        error={Boolean(errors.Number)}
        {...register('Number', {
          required: true,
          pattern: phoneNumberRegex,
        })}
      />
      <TextField label="Adress 1" variant="filled" name="address-1" />
      <TextField label="Adress 2" variant="filled" name="address-2" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          name="role"
          variant="filled"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={access}
          onChange={handleChange}
          defaultValue={3}
        >
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={2}>Manager</MenuItem>
          <MenuItem value={3}>User</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: 'right' }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
        >
          Create New User
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSnakOpen}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
