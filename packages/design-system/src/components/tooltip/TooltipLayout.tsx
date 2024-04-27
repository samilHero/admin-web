'use client';

import styled from '@emotion/styled';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltip-text {
    visibility: hidden;
    width: max-content;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px 8px;
    position: absolute;
    z-index: 1;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;
