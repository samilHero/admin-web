import { useAuth } from 'app/common/_hooks/useAuth';
import { useLoginMutation } from 'queries/useAdminQuery';
import { useEffect, useState } from 'react';

export const useLoginHandler = () => {
  const { saveCurrentUser } = useAuth();
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    mutateAsync: mutateAsyncLogin,
    isSuccess: isSuccessLogin,
    isError: isErrorLogin,
    data: dataLogin,
  } = useLoginMutation();

  // TODO : Button onclick에 넣었을 때, UI깨짐 현상 발생
  const handleLogin = () => {
    mutateAsyncLogin({
      loginId: 'admin_test',
      password: 'samil123!@#',
    });
  };

  useEffect(() => {
    if (isSuccessLogin) {
      saveCurrentUser(dataLogin);
    }

    if (isErrorLogin) {
      alert(dataLogin);
    }
  }, [dataLogin]);

  return {
    loginId,
    setLoginId,
    password,
    setPassword,
    handleLogin,
  };
};
