import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

type AxiosFunc = typeof Axios.get | typeof Axios.post | typeof Axios.patch | typeof Axios.put | typeof Axios.delete

const request = async (
  axiosFunc: AxiosFunc,
  ...args: [string, any, AxiosRequestConfig | undefined] | [string, AxiosRequestConfig | undefined]
): Promise<AxiosResponse> => {
  try {
    // @ts-ignore
    return (await axiosFunc(...args)) as AxiosResponse
  } catch (error: unknown) {
    let res = {}
    if (Axios.isAxiosError(error)) {
      // Access to config, request, and response
      res = error.response ?? ({} as AxiosResponse)
    }
    return res as AxiosResponse
  }
}

class CustomAxiosInstance {
  instance: AxiosInstance

  constructor(baseURL?: string) {
    this.instance = Axios.create({
      baseURL
    })

    // Request inject access_key
    this.instance.interceptors.request.use(
      async (config: any) => {
        try {
          return config
        } catch (err) {
          return config
        }
      },
      (error) => {
        Promise.reject(error)
      }
    )

    // Add auto refresh token
    this.instance.interceptors.response.use(
      async (response) => {
        return Promise.resolve(response)
      },
      async (error) => {
        return Promise.reject(error)
      }
    )
  }

  get(path: string, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    return request(this.instance.get, path, configs)
  }

  post(path: string, data: any, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    return request(this.instance.post, path, data, configs)
  }

  put(path: string, data: any, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    return request(this.instance.put, path, data, configs)
  }

  patch(path: string, data: any, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    return request(this.instance.patch, path, data, configs)
  }

  delete(path: string, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    return request(this.instance.delete, path, configs)
  }
}

export default CustomAxiosInstance
