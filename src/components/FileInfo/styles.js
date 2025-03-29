import styled from 'styled-components';
import { Paper, IconButton } from '@mui/material';

export const FileInfoPaper = styled(Paper)`

  padding: 1.25rem;
  margin: 1.5rem 0;
  border-radius: 14px !important;
  background: linear-gradient(145deg, #ffffff, #f8fbff) !important;
  box-shadow: 0 6px 18px rgba(0, 107, 255, 0.08) !important;
  border: 1px solid rgba(0, 107, 255, 0.08) !important;
  transition: all 0.3s ease !important;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 107, 255, 0.12) !important;
  }
`;

export const FileInfoContent = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #003cb3;
  letter-spacing: 0.2px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FileSize = styled.div`
  font-size: 0.85rem;
  color: #5a7eb5;
  font-weight: 500;
`;

export const CloseButton = styled(IconButton)`
  margin-left: auto !important;
  color: #5a7eb5 !important;
  transition: all 0.2s ease !important;

  @media (max-width: 480px) {
    margin-left: 0 !important;
    align-self: flex-end;
  }

  &:hover {
    color: #ff3e3e !important;
    background-color: rgba(255, 62, 62, 0.1) !important;
    transform: rotate(90deg);
  }
`;