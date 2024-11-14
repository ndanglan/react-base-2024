import CustomAxiosInstance from '@/lib/axios'

class UserApi {
  apiInstance: CustomAxiosInstance
  constructor(apiInstance: CustomAxiosInstance) {
    this.apiInstance = apiInstance
  }

  async fetchUsers() {
    return this.apiInstance.get('/users')
  }
}

export const userApi = new UserApi(new CustomAxiosInstance(import.meta.env.VITE_BASE_URL))
