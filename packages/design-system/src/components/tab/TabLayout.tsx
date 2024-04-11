'use client';

import styled from '@emotion/styled';

export const TabLayout = styled.div`
  display: flex;
  gap: 10px;
`;
interface TabListProps {
  active: boolean;
}

export const TabList = styled.div<TabListProps>`
  background-color: ${(props) => (props.active ? '#0056b3' : '#007bff')};

  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;
