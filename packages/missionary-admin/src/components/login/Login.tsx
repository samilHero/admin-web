'use client';

import React from 'react';
import { Button, Input } from '@samilhero/design-system';
import { useLoginMutation } from 'queries/useAdminQuery';
import { css } from '@emotion/react';
import { IconLogo } from 'styles/icons';

export default function Login() {
  const { mutateAsync: mutateAsyncLogin } = useLoginMutation();

  const handleLogin = () => {
    mutateAsyncLogin({
      loginId: 'admin_test',
      password: 'samil123!@#',
    });
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      })}
    >
      <div
        css={css({
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '400px',
          border: '1px solid #ccc',
        })}
      >
        {/* <IconLogo /> */}
        <div
          css={css({
            fontSize: '34px',
            fontWeight: 700,
            lineHeight: '40px',
            textAlign: 'center',
          })}
        >
          삼일교회 선교 담당
          <br />
          교역자 로그인
        </div>
        <div
          css={css({
            marginTop: '12px',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '22px',
            textAlign: 'center',
          })}
        >
          전달받은 선교 담당 계정으로
          <br />
          로그인 하세요.
        </div>
        <div
          css={css({
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            marginTop: '60px',
            gap: '12px',
          })}
        >
          <Input value="" placeholder="관리자 아이디" onChange={() => null} />
          <Input
            type="password"
            value=""
            placeholder="비밀번호"
            onChange={() => null}
          />

          <Button width={'400'} size={'md'} onClick={handleLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
