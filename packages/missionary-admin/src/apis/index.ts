import apiInstance from './instance';

export default function useAdminAPI() {
    const setLogin = async <T>(request: any) =>
        apiInstance.post<T>(`/admin/login`, request);

    const getChurches = async <T>(request: any) =>
        apiInstance.post<T>(`/admin/churches`, request);

    return { setLogin, getChurches };
}
