import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const AppContainer = styled.div`
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 3.5rem 2.5rem;
  background: linear-gradient(145deg, #ffffff, #f5f9ff);
  border-radius: 28px;
  box-shadow: 
    0 20px 40px rgba(58, 134, 255, 0.12),
    0 8px 16px rgba(58, 134, 255, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(58, 134, 255, 0.12);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    margin: 1.5rem 1rem;
    border-radius: 24px;
  }

  &:hover {
    box-shadow: 
      0 25px 50px rgba(58, 134, 255, 0.15),
      0 10px 24px rgba(58, 134, 255, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.9);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #3a86ff, #4361ee, #3f37c9);
    opacity: 0.9;
    transition: opacity 0.3s ease, height 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    height: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #1a56db;
  margin-bottom: 3rem;
  font-weight: 800;
  font-size: 2.8rem;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 2px 4px rgba(58, 134, 255, 0.1);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -14px;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #ff6b6b, #ff9e3e);
    border-radius: 6px;
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 2px 6px rgba(255, 107, 107, 0.2);
  }
`;

export const DownloadSection = styled.div`
  display: flex;
  gap: 1.75rem;
  margin-top: 3.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 1.2rem 2.8rem;
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  color: white;
  text-decoration: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    background: linear-gradient(135deg, #ff5757, #ff7e3d);
    box-shadow: 0 12px 28px rgba(255, 107, 107, 0.4);
    transform: translateY(-4px);
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
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    transform: skewX(-25deg);
    transition: all 0.75s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

export const ResetButton = styled(Button)`
  && {
    padding: 1.2rem 2.8rem;
    border: 2px solid #3a86ff;
    color: #3a86ff;
    font-weight: 700;
    font-size: 1.05rem;
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    background-color: rgba(58, 134, 255, 0.03);
    letter-spacing: -0.01em;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
    
    &:hover {
      background-color: rgba(58, 134, 255, 0.08);
      border-color: #4361ee;
      color: #4361ee;
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(58, 134, 255, 0.15);
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
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(58, 134, 255, 0),
        rgba(58, 134, 255, 0.1),
        rgba(58, 134, 255, 0)
      );
      transform: skewX(-25deg);
      transition: all 0.75s ease;
    }
    
    &:hover::before {
      left: 150%;
    }
  }
`;

export const FilePreview = styled.div`
  margin: 2.5rem 0;
  padding: 1.75rem;
  border: 2px solid rgba(58, 134, 255, 0.2);
  border-radius: 20px;
  background-color: rgba(58, 134, 255, 0.03);
  box-shadow: 0 8px 24px rgba(58, 134, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 16px;
  }
  
  &:hover {
    border-color: rgba(58, 134, 255, 0.3);
    box-shadow: 0 12px 30px rgba(58, 134, 255, 0.08);
    transform: translateY(-3px);
  }

  h3 {
    margin-top: 0;
    color: #1a56db;
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.01em;
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const PreviewButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const PreviewButton = styled(Button)`
  && {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    min-width: 90px;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    background-color: ${props => props.primary ? 'rgba(58, 134, 255, 0.9)' : 'rgba(58, 134, 255, 0.12)'};
    color: ${props => props.primary ? 'white' : '#3a86ff'};
    box-shadow: ${props => props.primary ? '0 4px 12px rgba(58, 134, 255, 0.2)' : 'none'};
    
    &:hover {
      background-color: ${props => props.primary ? 'rgba(67, 97, 238, 1)' : 'rgba(58, 134, 255, 0.18)'};
      transform: translateY(-2px);
      box-shadow: ${props => props.primary ? '0 6px 16px rgba(58, 134, 255, 0.3)' : '0 4px 12px rgba(58, 134, 255, 0.1)'};
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

export const PreviewContent = styled.pre`
  max-height: ${props => props.isOpen ? '350px' : '0'};
  overflow-y: auto;
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  background-color: white;
  border: ${props => props.isOpen ? '2px solid rgba(58, 134, 255, 0.15)' : 'none'};
  border-radius: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Fira Code', 'SF Mono', 'Roboto Mono', 'Courier New', monospace;
  line-height: 1.7;
  color: #334a7a;
  box-shadow: ${props => props.isOpen ? 'inset 0 6px 16px rgba(58, 134, 255, 0.06)' : 'none'};
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0;
  font-size: 0.95rem;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(58, 134, 255, 0.05);
    border-radius: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(58, 134, 255, 0.3);
    border-radius: 8px;
    
    &:hover {
      background-color: rgba(58, 134, 255, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.isOpen ? '1.25rem' : '0 1.25rem'};
    font-size: 0.9rem;
    border-radius: 12px;
  }
`;