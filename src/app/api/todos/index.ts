import CustomAxiosInstance from '@/lib/axios'

class TodoApi {
  apiInstance: CustomAxiosInstance
  constructor(apiInstance: CustomAxiosInstance) {
    this.apiInstance = apiInstance
  }

  async fetchTodos() {
    return this.apiInstance.get('/todos')
  }
}

export const todoApi = new TodoApi(new CustomAxiosInstance(import.meta.env.VITE_BASE_URL))
