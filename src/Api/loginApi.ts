import {LoginEntity} from '../Model/login';
import {LoginResponse} from '../Model/loginResponse';
import {UserProfile} from '../Model/userProfile';

class LoginApi {
  public login(loginInfo : LoginEntity) : Promise<LoginResponse> {
      const loginResponse = new LoginResponse();

      if(loginInfo.login === 'admin' && loginInfo.password === 'test') {
        loginResponse.succeeded = true;
        loginResponse.userProfile = {fullname: "John Doe", role: 'admin' };
      } else {
        loginResponse.succeeded = false;
        loginResponse.userProfile = new UserProfile();
      }

      return Promise.resolve(loginResponse);
  }
}

export const loginApi = new LoginApi();
