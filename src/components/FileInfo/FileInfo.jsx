import { IconButton, Typography, Paper } from '@mui/material';
import { Close, InsertDriveFile } from '@mui/icons-material';

export default function FileInfo({ file, onReset }) {
  return (
    <Paper elevation={3} className="file-info-paper">
      <div className="file-info-content">
        <InsertDriveFile fontSize="large" />
        <div>
          <Typography variant="subtitle1">{file.name}</Typography>
          <Typography variant="caption">
            {(file.size / 1024).toFixed(2)} KB
          </Typography>
        </div>
        <IconButton onClick={onReset} className="close-button">
          <Close />
        </IconButton>
      </div>
    </Paper>
  );
}