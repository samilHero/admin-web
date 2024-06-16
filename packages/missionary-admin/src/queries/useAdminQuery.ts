import type {
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import useAdminAPI from 'apis'; // 파일 경로에 'apis'를 정확하게 맞춰주세요
import { CHURCHES_LIST_QUERY, LOGIN_MUTATION } from './queryKeys';

/**
 * 교회 정보 목록 조회
 */
export const useGetChurchesQuery = (request: any, options?: UseQueryOptions) => {
  const { getChurches } = useAdminAPI();

  const queryFn = async () => {
    const { data: response } = await getChurches(request);
    return response;
  };

  return useQuery({
    queryKey: [CHURCHES_LIST_QUERY],
    queryFn,
    ...options,
  });
};

/**
 * 로그인
 */
export const useLoginMutation = () => {
  const { setLogin } = useAdminAPI();

  const mutationFn = async (request: any) => {
    const { data: response } = await setLogin(request);
    return response;
  };

  return useMutation({
    mutationKey: [LOGIN_MUTATION],
    mutationFn,
  });
};
