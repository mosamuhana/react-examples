import {
  OpenAIApi,
  CreateCompletionRequest,
  CreateCompletionResponse,
  //ListModelsResponse,
  Model,
} from 'openai';

const USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';

const CompletionRequestDefaults: Partial<CreateCompletionRequest> = {
  model: 'text-davinci-003',
  max_tokens: 50,
  temperature: 0.7,
};

export class ChatGptService {
  constructor(public readonly client: OpenAIApi) {}

  async createCompletion(request: CreateCompletionRequest): Promise<CreateCompletionResponse> {
    request = { ...CompletionRequestDefaults, ...request };

    const response = await this.client.createCompletion(request, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    });

    return response.data;
  }

  async listModels(): Promise<Model[]> {
    const res = await this.client.listModels();
    const { data } = res.data;
    return data;
  }
}
