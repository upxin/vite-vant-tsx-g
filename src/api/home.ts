import { fetch } from '@/utils/request';
import { Api } from './url/index';

export const fetchGet = () => {
  console.log(999);
  return fetch(Api.GET_REST);
};
