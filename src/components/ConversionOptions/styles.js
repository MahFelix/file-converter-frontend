import styled from 'styled-components';
import { Button } from '@mui/material';

export const ConversionOptionsContainer = styled.div`
  background: #fafafa;
  padding: 24px;
  border-radius: 12px;
  margin: 20px 0;
`;

export const ConversionButton = styled(Button)`
  && {
    min-width: 120px;
    text-transform: none;
    
    &:hover {
      background-color: rgba(25, 118, 210, 0.04);
    }
  }
`;