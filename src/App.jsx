/* eslint-disable no-unused-vars */

import { useState,useEffect } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import FileUpload from '../src/components/FileUpload/FileUpload';
import ConversionOptions from '../src/components/ConversionOptions/ConversionOptions';
import FileInfo from '../src/components/FileInfo/FileInfo';
import { GlobalStyle } from './styles/global';
import { AppContainer, Title, DownloadSection, DownloadLink, ResetButton, FilePreview, PreviewContent, PreviewHeader, PreviewButton, PreviewButtons } from './App.styles';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionOptions, setConversionOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [targetFormat, setTargetFormat] = useState(null);
  const [filePreview, setFilePreview] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://file-converter-1-i6jk.onrender.com/api/get-conversion-options')
        .then(response => console.log('Backend pingado com sucesso'))
        .catch(err => console.error('Erro ao pingar backend:', err));
    }, 300000); // 5 minutos

    return () => clearInterval(interval);
  }, []);

  const handleFileSelect = async (file) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setFilePreview('');

    try {
      
      const reader = new FileReader();
      
  
      if (file.type.includes('text/') || 
          ['.txt', '.csv', '.html', '.xml', '.json', '.js', '.css'].some(ext => file.name.endsWith(ext))) {
        reader.onload = (e) => {
          setFilePreview(e.target.result);
        };
        reader.readAsText(file);
      } 
 
      else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        setFilePreview("Pré-visualização de PDF não disponível - Arquivo PDF carregado");
      }
     
      else if ([
        '.doc', '.docx', '.odt', '.rtf', 
        '.xls', '.xlsx', '.ods', 
        '.ppt', '.pptx', '.odp'
      ].some(ext => file.name.endsWith(ext))) {
        setFilePreview("Pré-visualização de documentos do Office não disponível - Arquivo carregado");
      }
    
      else {
        setFilePreview("Pré-visualização não disponível para este tipo de arquivo");
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://file-converter-1-i6jk.onrender.com/api/get-conversion-options', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Falha ao obter opções de conversão');

      const options = await response.json();
      setConversionOptions(options);
      setSelectedFile(file);
    } catch (err) {
      setError(err.message);
      setSelectedFile(null);
    } finally {
      setIsLoading(false);
    }
  };
  const handleConvert = async (targetFormat) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('targetFormat', targetFormat);

      const response = await fetch('https://file-converter-1-i6jk.onrender.com/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha na conversão do arquivo');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setTargetFormat(targetFormat); // Armazena o formato de destino
      setSuccess(`Arquivo convertido para ${targetFormat.toUpperCase()} com sucesso!`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setConversionOptions([]);
    setDownloadUrl('');
    setError(null);
    setSuccess(null);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Conversor de Arquivos</Title>

        {error && (
          <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" onClose={() => setSuccess(null)} sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {isLoading && <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />}

        {!selectedFile ? (
          <FileUpload
            onFileSelect={handleFileSelect}
            disabled={isLoading}
          />
        ) : (
          <>
            <FileInfo
              file={selectedFile}
              onReset={handleReset}
            />
            {filePreview && (
              <FilePreview>
                <PreviewHeader>
                  <h3>Pré-visualização do Arquivo:</h3>
                  <PreviewButtons>
                    {isPreviewOpen ? (
                      <PreviewButton 
                        variant="contained" 
                        color="error" 
                        size="small"
                        onClick={() => setIsPreviewOpen(false)}
                      >
                        Fechar
                      </PreviewButton>
                    ) : (
                      <PreviewButton 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        onClick={() => setIsPreviewOpen(true)}
                      >
                        Abrir
                      </PreviewButton>
                    )}
                  </PreviewButtons>
                </PreviewHeader>
                <PreviewContent isOpen={isPreviewOpen}>
                  {filePreview}
                </PreviewContent>
              </FilePreview>
            )}

            {conversionOptions.length > 0 && (
              <ConversionOptions
                options={conversionOptions}
                onConvert={handleConvert}
                isLoading={isLoading}
              />
            )}

            {downloadUrl && (
              <DownloadSection>
                <DownloadLink
                  href={downloadUrl}
                  download={
                    selectedFile.name.replace(/\.[^/.]+$/, "") + 
                    "_converted." +
                    targetFormat
                  }
                >
                  Baixar Arquivo Convertido
                </DownloadLink>
                <ResetButton
                  onClick={handleReset}
                  variant="outlined"
                >
                  Converter Novo Arquivo
                </ResetButton>
              </DownloadSection>
            )}
          </>
        )}
      </AppContainer>
    </>
  );
}

export default App;