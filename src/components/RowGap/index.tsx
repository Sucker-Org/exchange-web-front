import React from 'react';
import { Box } from '@mui/material';

interface RowGapProps {
  size?: number | string;
}

const RowGap: React.FC<RowGapProps> = ({ size = '1rem' }) => {
  return <Box sx={{ height: size }} />;
};

export default RowGap;
