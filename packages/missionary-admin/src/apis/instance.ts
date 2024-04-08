import axios from 'axios';

import type { AxiosInstance } from 'axios';

const createApiInstance = (
  apiUrl: string,
  requestHeaders?: object,
): AxiosInstance => {
  let headers = {
    'Content-Type': 'application/json-patch+json',
  };

  if (requestHeaders) {
    headers = { ...headers, ...requestHeaders };
  }
  return axios.create({
    baseURL: apiUrl,
    headers,
  });
};

// TODO: 적절한 환경변수를 사용하도록 수정
export default createApiInstance(process.env.NEXT_PUBLIC_PROXY_API_URL ?? '');
