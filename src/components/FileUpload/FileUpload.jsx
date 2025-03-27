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
      // Documentos
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.oasis.opendocument.text': ['.odt'],
      'application/rtf': ['.rtf'],
      'text/plain': ['.txt'],
      
      // Planilhas
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.oasis.opendocument.spreadsheet': ['.ods'],
      'text/csv': ['.csv'],
      
      // Apresentações
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.oasis.opendocument.presentation': ['.odp'],
      
      // Outros
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
        Formatos suportados: DOC/DOCX, XLS/XLSX, PPT/PPTX, ODT/ODS/ODP, CSV, TXT, RTF, PDF
      </S.DropzoneSubtext>
    </S.Dropzone>
  );
}