'use client';
import styled from '@emotion/styled';

export const TabLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export const TabList = styled.div`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#0056b3' : '#007bff')};

  &:hover {
    background-color: #0056b3;
  }
`;
