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
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 5px;

  background-color: ${(props) => (props.active ? '#0056b3' : '#007bff')};

  color: #fff;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
