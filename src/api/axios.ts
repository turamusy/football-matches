import axios, { AxiosInstance } from 'axios';

/** Переменная instance будет содержать экземпляр Axios
 * после инициализации с помощью createAxiosInstance.
 * Все вызовы API будут использовать этот экземпляр Axios с помощью
 * redux query, доступного в папке service.
 */
let instance: AxiosInstance;

/**
 * @description Создание Axios Instance
 * @memberof axios
 */
export function createAxiosInstance(token?: string): AxiosInstance {
  const baseURL = '';

  const axiosConfig = {
    baseURL,
    timeout: 20000,

    validateStatus(status: number) {
      return status >= 200 && status < 300; 
    },
  };
  
  instance = axios.create({
    ...axiosConfig,
    ...(token && { headers: { "X-Auth-Token": token, "content-type": "application/json" } }),
  });

  return instance;
}

export { instance };