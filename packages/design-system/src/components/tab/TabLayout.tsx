'use client';

import styled from '@emotion/styled';
import { colors } from '@styles/color';

export const TabLayout = styled.div`
  display: flex;
`;
interface TabListProps {
  active: boolean;
}

export const TabList = styled.div<TabListProps>`
  padding: 10px;
  border-bottom: ${(props) =>
    props.active ? '1px solid ' + colors.primary20 : '0'};

  color: ${(props) => (props.active ? colors.primary20 : colors.primary70)};
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  cursor: pointer;
`;
