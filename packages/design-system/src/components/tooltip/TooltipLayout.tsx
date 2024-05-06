'use client';

import styled from '@emotion/styled';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;

  .tooltip-text {
    width: max-content;
    background-color: rgba(0, 0, 0, 70%);

    visibility: hidden;
    position: absolute;
    color: #fff;

    padding: 4px 8px;
    bottom: calc(100% + 8px);
    left: 50%;
    border-radius: 4px;
    z-index: 1;
    text-align: center;

    opacity: 0;
    transition: opacity 0.3s;
    transform: translateX(-50%);
  }

  &:hover .tooltip-text {
    opacity: 1;
    visibility: visible;
  }
`;
