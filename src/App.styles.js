import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #1976d2;
  margin-bottom: 2rem;
`;

export const DownloadSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DownloadLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1976d2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`;

export const ResetButton = styled(Button)`
  && {
    padding: 0.75rem 1.5rem;
    border-color: #1976d2;
    color: #1976d2;
    
    &:hover {
      background-color: rgba(25, 118, 210, 0.04);
      border-color: #1565c0;
    }
  }
`;

export const FilePreview = styled.div`
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;

  h3 {
    margin-top: 0;
    color: #333;
  }
`;

export const PreviewContent = styled.pre`
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 3px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
`;