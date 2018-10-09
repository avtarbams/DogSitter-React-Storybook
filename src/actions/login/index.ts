import {loginApi} from '../../Api/loginApi';
import {actionsEnums} from '../../Common/actionsEnums';
import {LoginEntity} from '../../Model/login';
import {LoginResponse} from '../../Model/loginResponse';

export const loginRequestCompletedAction = (loginResponse : LoginResponse) => {
    return {
      type: actionsEnums.USERPROFILE_PERFORM_LOGIN,
      payload: loginResponse
    }
  }

  export const updateEditingLogin = (loginInfo : LoginEntity) => {
    return {
      type: actionsEnums.USERPROFILE_UPDATE_EDITING_LOGIN,
      payload: loginInfo
    }
  }

  export const loginRequestStartedAction = (login : LoginEntity) => {
    return function(dispatcher) {
      const promise = loginApi.login(login);
  
      promise.then(
        data => {        
          dispatcher(loginRequestCompletedAction(data));
          // This is not ideal to have it here, maybe move it to middleware?
          if(data.succeeded === true) {
           console.log('verfied');
           alert('verified');
          }else{
            alert('wrong username / password');
          }
        }
      );
      return promise;
    }
  }
  