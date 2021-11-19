import { Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <Box>
            <Typography variant="h3"> Payment Coming Soon!!!!</Typography>
            <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
        </Box>
    );
};

export default Payment;