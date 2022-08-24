export interface IError {
  status: string;
  message: string | string[];
}

export interface CreateClientDTO {
  id: string;
  name: string;
  email: string;
  document: string;
  error: IError;
}
