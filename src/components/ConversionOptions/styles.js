import styled from 'styled-components';
import { Button } from '@mui/material';

export const ConversionOptionsContainer = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f9ff);
  padding: 1.5rem;
  border-radius: 16px;
  margin: 1.5rem 0;
  box-shadow: 0 8px 24px rgba(0, 107, 255, 0.1);
  border: 1px solid rgba(0, 107, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 107, 255, 0.15);
  }
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const ConversionButton = styled(Button)`
  && {
    min-width: 140px;
    padding: 10px 16px;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0.3px;
    border-radius: 10px;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #006bff, #0052d9);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 107, 255, 0.25);
    
    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
      padding: 8px 12px;
      font-size: 0.8rem;
    }
    
    &:hover {
      background: linear-gradient(135deg, #0052d9, #003cb3);
      box-shadow: 0 6px 16px rgba(0, 107, 255, 0.35);
      transform: translateY(-2px);
    }
  }
`;