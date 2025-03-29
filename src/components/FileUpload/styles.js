import styled from 'styled-components';
import { CloudUpload } from '@mui/icons-material';

export const UploadIcon = styled(CloudUpload)`
  font-size: 3.5rem !important;
  margin-bottom: 1.25rem;
  color: #006bff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

export const DropzoneText = styled.p`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #003cb3;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DropzoneSubtext = styled.span`
  font-size: 1rem;
  color: #5a7eb5;
  max-width: 90%;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed #006bff;
  border-radius: 16px;
  padding: 3rem 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 107, 255, 0.05);
  text-align: center;
  min-height: 240px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 200px;
  }

  &:hover {
    border-color: #ff3e3e;
    background-color: rgba(255, 62, 62, 0.05);
    
    ${UploadIcon} {
      color: #ff3e3e;
      transform: scale(1.1);
    }
    
    ${DropzoneText} {
      color: #ff3e3e;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #006bff, #ff3e3e);
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
`;