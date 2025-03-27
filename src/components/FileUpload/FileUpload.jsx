import React from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from '@mui/icons-material';
import * as S from './styles';

export default function FileUpload({ onFileSelect }) {
  const onDrop = React.useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'text/csv': ['.csv'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    multiple: false,
    noClick: false,
    noKeyboard: false,
  });

  return (
    <S.Dropzone
      {...getRootProps()}
      $isDragActive={isDragActive}
      aria-label="Área de upload de arquivos"
    >
      <input 
        {...getInputProps()} 
        aria-hidden="true" 
      />
      <S.UploadIcon $isDragActive={isDragActive} />
      <S.DropzoneText $isDragActive={isDragActive}>
        {isDragActive ? 'Solte o arquivo aqui' : 'Arraste e solte seu arquivo'}
      </S.DropzoneText>
      <S.DropzoneSubtext>
        Formatos suportados: DOCX, XLSX, PPTX, CSV, PDF
      </S.DropzoneSubtext>
    </S.Dropzone>
  );
}