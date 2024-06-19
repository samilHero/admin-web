export const useAuth = () => {
  const saveCurrentUser = (user: any): void => {
    localStorage.setItem('token', user);
  };

  return { saveCurrentUser };
};
