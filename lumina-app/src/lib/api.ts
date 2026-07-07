const BASE_URL = '/api';

export const setAuthToken = (token: string) => {
  localStorage.setItem('neurome_token', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('neurome_token');
};

export const clearAuthToken = () => {
  localStorage.removeItem('neurome_token');
};

interface FetchOptions extends RequestInit {
  data?: any;
}

export const apiFetch = async (endpoint: string, options: FetchOptions = {}) => {
  const { data, headers, ...customConfig } = options;
  const token = getAuthToken();

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      'Content-Type': data ? 'application/json' : '',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  

  let responseData;
  try {
    responseData = await response.json();
  } catch (error) {
    responseData = null;
  }

  if (!response.ok) {
    throw new Error(responseData?.error || responseData?.message || 'Something went wrong');
  }

  return responseData;
};
