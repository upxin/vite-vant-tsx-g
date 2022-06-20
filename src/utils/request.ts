import { createFetch } from '@vueuse/core';

const baseUrl = import.meta.env.VITE_BASE_URL;
const fetch = createFetch({
  baseUrl,
  options: {
    async beforeFetch({ options }) {
      console.log('options', options);
      options.headers = { ...options.headers, platform: 'weapp' };
      return { options };
    },
    afterFetch({ response, data }) {
      console.log('response', response, data);
      return { data, response };
    },
    // 请求错误
    onFetchError({ data, error }) {
      console.error(error);
      return { data, error };
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
});

export { fetch };
