import axios, { AxiosResponse, AxiosError, AxiosInstance } from "axios";

export type ResponseApi = AxiosResponse;

class APIService {
  private readonly instance: AxiosInstance;

  getInstance() {
    return this.instance;
  }

  getError(error: unknown): ResponseApi {
    if (error instanceof AxiosError) {
      throw error.response?.data || error.response || error;
    } else {
      throw new Error("Erro desconhecido");
    }
  }

  newGenericAuthenticatedInstance(): AxiosInstance {
    return axios.create({
      headers: {
        Authorization: `Bearer TOKEN`,
        "Content-type": "application/json",
      },
    });
  }

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080",
    });

    this.instance.interceptors.request.use(async (config) => {
      config.headers.apikey = "429683C4C977415CAAFCCE10F7D57E11";
      return config;
    });

    this.instance.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        if (error.response && axios.isAxiosError(error)) {
          if (error.response.status === 401) {
            // signOut(false);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  setToken(token: string) {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

const apiService = new APIService();
export const api = apiService.getInstance();
export default apiService;
