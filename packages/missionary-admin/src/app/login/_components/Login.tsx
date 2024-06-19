'use client';

import React, { ChangeEvent } from 'react';
import { Button, Input } from '@samilhero/design-system';
import { useLoginMutation } from 'queries/useAdminQuery';
import { css } from '@emotion/react';
import { IconLogo } from 'styles/icons';
import { useLoginHandler } from '../_hooks/useLoginHandler';

export default function Login() {
  const {
    mutateAsync: mutateAsyncLogin,
    isSuccess: isSuccessLogin,
    isError: isErrorLogin,
    data: dataLogin,
  } = useLoginMutation();
  const { loginId, setLoginId, password, setPassword } = useLoginHandler();

  const handleLogin = async () => {
    await mutateAsyncLogin({
      loginId,
      password,
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
          <Input
            value={loginId}
            placeholder="관리자 아이디"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginId(e.target.value)
            }
          />
          <Input
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <Button width={'400'} size={'md'} onClick={handleLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
