import styled from 'styled-components';
import { Paper, IconButton } from '@mui/material';

export const FileInfoPaper = styled(Paper)`
  padding: 1.5rem;
  margin: 1.75rem 0;
  border-radius: 18px !important;
  background: linear-gradient(145deg, #ffffff, #f7faff) !important;
  box-shadow: 
    0 8px 24px rgba(58, 134, 255, 0.08), 
    0 2px 4px rgba(58, 134, 255, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(58, 134, 255, 0.12) !important;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 16px !important;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 14px 28px rgba(58, 134, 255, 0.12),
      0 4px 8px rgba(58, 134, 255, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.8) !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #3a86ff, #4361ee);
    opacity: 0.85;
    transition: width 0.3s ease;
  }
  
  &:hover::before {
    width: 6px;
  }
`;

export const FileInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #1a56db;
  letter-spacing: -0.01em;
  position: relative;
  padding-left: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const FileSize = styled.div`
  font-size: 0.9rem;
  color: #6b7c93;
  font-weight: 600;
  background: rgba(58, 134, 255, 0.08);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(58, 134, 255, 0.15);
  }
`;

export const CloseButton = styled(IconButton)`
  margin-left: auto !important;
  color: #6b7c93 !important;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  background-color: rgba(107, 124, 147, 0.08) !important;
  
  @media (max-width: 480px) {
    margin-left: 0 !important;
    align-self: flex-end;
  }
  
  &:hover {
    color: #ff6b6b !important;
    background-color: rgba(255, 107, 107, 0.12) !important;
    transform: rotate(90deg) scale(1.1);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;