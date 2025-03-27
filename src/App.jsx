
import { useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import FileUpload from '../src/components/FileUpload/FileUpload';
import ConversionOptions from '../src/components/ConversionOptions/ConversionOptions';
import FileInfo from '../src/components/FileInfo/FileInfo';
import { GlobalStyle } from './styles/global';
import { AppContainer, Title, DownloadSection, DownloadLink, ResetButton, FilePreview, PreviewContent } from './App.styles';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionOptions, setConversionOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [targetFormat, setTargetFormat] = useState(null);
  const [filePreview, setFilePreview] = useState('');

  const handleFileSelect = async (file) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setFilePreview('');

    try {
      // Tenta fazer pré-visualização para diferentes tipos de arquivos
      const reader = new FileReader();
      
      // Arquivos de texto (TXT, CSV, etc)
      if (file.type.includes('text/') || 
          ['.txt', '.csv', '.html', '.xml', '.json', '.js', '.css'].some(ext => file.name.endsWith(ext))) {
        reader.onload = (e) => {
          setFilePreview(e.target.result);
        };
        reader.readAsText(file);
      } 
      // Arquivos PDF (exibe mensagem)
      else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        setFilePreview("Pré-visualização de PDF não disponível - Arquivo PDF carregado");
      }
      // Documentos do Office (exibe mensagem)
      else if ([
        '.doc', '.docx', '.odt', '.rtf', 
        '.xls', '.xlsx', '.ods', 
        '.ppt', '.pptx', '.odp'
      ].some(ext => file.name.endsWith(ext))) {
        setFilePreview("Pré-visualização de documentos do Office não disponível - Arquivo carregado");
      }
      // Outros tipos (mensagem genérica)
      else {
        setFilePreview("Pré-visualização não disponível para este tipo de arquivo");
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8095/api/get-conversion-options', {
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

      const response = await fetch('http://localhost:8095/api/convert', {
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
                <h3>Pré-visualização do Arquivo:</h3>
                <PreviewContent>
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
                    selectedFile.name.replace(/\.[^/.]+$/, "") + // Remove a extensão original
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