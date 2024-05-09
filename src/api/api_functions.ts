import {axiosInstance} from 'api/api_helper';
import {LoginRequest} from 'data_models/api_data_models';

export const LoginUser = async (request: LoginRequest) => {
  const response = await axiosInstance.post('dasdasdasd.com');
  return response.data;
};
