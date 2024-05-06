'use client';

import styled from '@emotion/styled';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;

  .tooltip-text {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    z-index: 1;

    width: max-content;
    padding: 4px 8px;
    border-radius: 4px;

    color: #fff;
    text-align: center;

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.3s;
    transform: translateX(-50%);
  }

  &:hover .tooltip-text {
    opacity: 1;
    visibility: visible;
  }
`;
