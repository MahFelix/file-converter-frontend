import styled from 'styled-components';
import { Paper, IconButton } from '@mui/material';

export const FileInfoPaper = styled(Paper)`
  padding: 16px;
  margin: 20px 0;
  border-radius: 12px !important;
`;

export const FileInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FileName = styled.div`
  font-weight: 500;
  font-size: 1rem;
`;

export const FileSize = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CloseButton = styled(IconButton)`
  margin-left: auto !important;
`;