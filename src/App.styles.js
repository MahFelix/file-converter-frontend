import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const AppContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffffff, #f5faff);
  border-radius: 20px;
  box-shadow: 0 12px 36px rgba(0, 107, 255, 0.15);
  border: 1px solid rgba(0, 107, 255, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 1rem;
    border-radius: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #006bff, #00c6ff);
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #003cb3;
  margin-bottom: 2.5rem;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #ff3e3e, #ff9a3e);
    border-radius: 3px;
    width: 70%;
    margin: 0 auto;
  }
`;

export const DownloadSection = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ff3e3e, #ff6b3e);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(255, 62, 62, 0.3);

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
  }

  &:hover {
    background: linear-gradient(135deg, #ff2b2b, #ff5b2b);
    box-shadow: 0 8px 20px rgba(255, 62, 62, 0.4);
    transform: translateY(-3px);
  }
`;

export const ResetButton = styled(Button)`
  && {
    padding: 1rem 2.5rem;
    border: 2px solid #006bff;
    color: #006bff;
    font-weight: 700;
    border-radius: 12px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      padding: 0.9rem 1.8rem;
    }
    
    &:hover {
      background-color: rgba(0, 107, 255, 0.1);
      border-color: #0052d9;
      color: #0052d9;
      transform: translateY(-3px);
    }
  }
`;
export const FilePreview = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  border: 2px solid #e0f0ff;
  border-radius: 14px;
  background-color: #f5faff;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3 {
    margin-top: 0;
    color: #006bff;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PreviewButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const PreviewButton = styled(Button)`
  && {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 80px;
  }
`;

export const PreviewContent = styled.pre`
  max-height: ${props => props.isOpen ? '300px' : '0'};
  overflow-y: auto;
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  background-color: white;
  border: ${props => props.isOpen ? '2px solid #e0f0ff' : 'none'};
  border-radius: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Fira Code', 'Courier New', monospace;
  line-height: 1.6;
  color: #3a5a8a;
  box-shadow: ${props => props.isOpen ? 'inset 0 4px 12px rgba(0, 107, 255, 0.05)' : 'none'};
  transition: all 0.3s ease;
  margin: 0;

  @media (max-width: 768px) {
    padding: ${props => props.isOpen ? '1rem' : '0 1rem'};
    font-size: 0.9rem;
  }
`;