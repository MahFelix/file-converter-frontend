import React from 'react';
import { Button, Grid, Typography, CircularProgress, Box, useTheme, useMediaQuery } from '@mui/material';

function ConversionOptions({ options = [], onConvert = () => {}, isConverting = false }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Garantir que temos um array de strings
  const safeOptions = Array.isArray(options) 
    ? options.map(opt => typeof opt === 'object' ? opt.targetFormat || '' : opt)
    : [];

  return (
    <Box sx={{ 
      mt: 3,
      p: 3,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1
    }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Selecione o formato de conversão:
      </Typography>
      
      {safeOptions.length > 0 ? (
        <Grid container spacing={isMobile ? 1 : 2}>
          {safeOptions
            .filter(format => format) 
            .map((format, index) => ( 
              <Grid item key={format || `option-${index}`} xs={isMobile ? 6 : 'auto'}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onConvert(format)}
                  disabled={isConverting}
                  startIcon={isConverting ? <CircularProgress size={20} /> : null}
                  sx={{
                    minWidth: isMobile ? 0 : 180,
                    width: isMobile ? '100%' : 'auto',
                    px: isMobile ? 1 : 3,
                    py: isMobile ? 1 : 1.5,
                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {format?.toUpperCase?.() || ''}
                </Button>
              </Grid>
            ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Nenhuma opção de conversão disponível
        </Typography>
      )}
      
      {isConverting && (
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <CircularProgress size={24} sx={{ mr: 2 }} />
          <Typography variant="body2">Convertendo arquivo...</Typography>
        </Box>
      )}
    </Box>
  );
}

export default ConversionOptions;