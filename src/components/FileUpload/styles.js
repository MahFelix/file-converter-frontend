import styled from 'styled-components';
import { CloudUpload } from '@mui/icons-material';

export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:#bdbdbd;
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.24s ease-in-out;
  background-color:transparent;
  text-align: center;
  min-height: 200px;
  margin: 1rem 0;

  &:hover {
    border-color: black};
    background-color: rgba(25, 118, 210, 0.05);
  
`;

export const UploadIcon = styled(CloudUpload)`
  font-size: 3rem !important;
  margin-bottom: 1rem;
  color:#757575;
  transition: color 0.24s ease-in-out;
`;

export const DropzoneText = styled.p`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color:#424242;
  transition: color 0.24s ease-in-out;
`;

export const DropzoneSubtext = styled.span`
  font-size: 0.875rem;
  color: #757575;
`;