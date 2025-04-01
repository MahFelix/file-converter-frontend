import styled from 'styled-components';
import { CloudUpload } from '@mui/icons-material';

export const UploadIcon = styled(CloudUpload)`
  font-size: 4rem !important;
  margin-bottom: 1.5rem;
  color: #3a86ff;
  filter: drop-shadow(0 4px 12px rgba(58, 134, 255, 0.3));
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  @media (max-width: 768px) {
    font-size: 3rem !important;
  }
`;

export const DropzoneText = styled.p`
  margin: 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a56db;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

export const DropzoneSubtext = styled.span`
  font-size: 1.05rem;
  color: #6b7c93;
  max-width: 80%;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 90%;
  }
`;

export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #3a86ff;
  border-radius: 24px;
  padding: 3.5rem 2.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgba(58, 134, 255, 0.03);
  text-align: center;
  min-height: 280px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 
    0 10px 30px rgba(58, 134, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    min-height: 220px;
    border-radius: 20px;
  }
  
  &:hover {
    border-color: #ff6b6b;
    background-color: rgba(255, 107, 107, 0.03);
    transform: translateY(-5px);
    box-shadow: 
      0 15px 35px rgba(58, 134, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    
    ${UploadIcon} {
      color: #ff6b6b;
      transform: scale(1.15) translateY(-5px);
      filter: drop-shadow(0 8px 16px rgba(255, 107, 107, 0.4));
    }
    
    ${DropzoneText} {
      color: #e63946;
      transform: translateY(-2px);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #3a86ff, #ff6b6b);
    opacity: 0.85;
    transition: opacity 0.3s ease, height 0.3s ease;
    border-radius: 24px 24px 0 0;
  }
  
  &:hover::after {
    opacity: 1;
    height: 6px;
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
`;