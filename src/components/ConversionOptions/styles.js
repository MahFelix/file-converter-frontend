import styled from 'styled-components';
import { Button } from '@mui/material';

export const ConversionOptionsContainer = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f7ff);
  padding: 2rem;
  border-radius: 24px;
  margin: 2rem 0;
  box-shadow: 
    0 12px 30px rgba(58, 134, 255, 0.08),
    0 4px 8px rgba(58, 134, 255, 0.04),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(58, 134, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 20px;
  }

  &:hover {
    box-shadow: 
      0 16px 36px rgba(58, 134, 255, 0.12),
      0 6px 16px rgba(58, 134, 255, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3a86ff, #4361ee, #3f37c9);
    opacity: 0.8;
    transition: opacity 0.3s ease, height 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
    height: 6px;
  }
`;

export const OptionsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a56db;
  margin-top: 0;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3a86ff, #4361ee);
    border-radius: 3px;
  }
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ConversionButton = styled(Button)`
  && {
    min-width: 160px;
    padding: 12px 20px;
    text-transform: none;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.01em;
    border-radius: 14px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: linear-gradient(135deg, #3a86ff, #4361ee);
    color: white;
    box-shadow: 0 6px 16px rgba(58, 134, 255, 0.3);
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
      padding: 10px 16px;
      font-size: 0.9rem;
      border-radius: 12px;
    }
    
    &:hover {
      background: linear-gradient(135deg, #4361ee, #3f37c9);
      box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
      transform: translateY(-3px);
    }
    
    &:active {
      transform: translateY(0);
      transition: all 0.1s ease;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
      transform: skewX(-25deg);
      transition: all 0.75s ease;
    }
    
    &:hover::before {
      left: 100%;
    }
  }
`;

export const OptionGroup = styled.div`
  margin-top: 2rem;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

export const GroupLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #3a86ff;
  margin-bottom: 1rem;
  margin-top: 0;
`;