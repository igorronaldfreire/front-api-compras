import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

function Feedback({
  successMessage,
  errorMessage,
  isSuccess,
  isError,
  isLoading,
}) {
  let feedback = <div />;

  if (isSuccess) {
    feedback = (
      <Alert severity="success">
        {successMessage}
      </Alert>
    );
  }

  if (isError) {
    feedback = <Alert severity="error">{errorMessage}</Alert>;
  }

  if (isLoading) {
    feedback = (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={32} />
      </Box>
    );
  }

  return feedback;
}

export default Feedback;
