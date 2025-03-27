import React from 'react';
import { Button, Grid, Typography, CircularProgress, Box } from '@mui/material';
function ConversionOptions({ options = [], onConvert = () => {}, isConverting = false }) {
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
        <Grid container spacing={2}>
          {safeOptions
            .filter(format => format) 
            .map((format, index) => ( 
              <Grid item key={format || `option-${index}`}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onConvert(format)}
                  
                  disabled={isConverting}
                  startIcon={isConverting ? <CircularProgress size={20} /> : null}
                  sx={{
                    minWidth: 180,
                    textTransform: 'none'
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