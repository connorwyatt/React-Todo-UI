import axios, {AxiosInstance, AxiosResponse} from 'axios';

export class TodosService {
  public static readonly instance: TodosService = new TodosService();

  private client: AxiosInstance = axios.create();
  private urls = {
    getAll: '/api/todos'
  };

  private constructor() {
  }

  public getTodos(): Promise<AxiosResponse> {
    return this.client.get(this.urls.getAll);
  }
}
