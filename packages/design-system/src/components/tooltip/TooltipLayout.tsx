'use client';

import styled from '@emotion/styled';

export const TooltipLayout = styled.div`
  position: relative;
  display: inline-block;
`;

// 툴팁 스타일
export const TooltipText = styled.span`
  position: absolute;
  bottom: 150%;
  left: 50%;
  z-index: 1;
  width: 120px;
  margin-left: -60px;
  padding: 5px;
  border-radius: 6px;
  background-color: #000;
  color: #fff;
  text-align: center;
  opacity: 0.1;
  visibility: hidden;
  transition: opacity 0.3s;
`;

// 툴팁을 나타내는 이벤트 핸들러
export const TooltipTrigger = styled.span`
  &:hover + ${TooltipText} {
    opacity: 1;
    visibility: visible;
  }
`;
