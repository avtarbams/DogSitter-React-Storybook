import * as React from "react"
import {LoginEntity} from '../../../Model/login';

interface Props {
   loginInfo : LoginEntity;
   updateLoginInfo : (loginInfo : LoginEntity) => void;
   performLogin : () => void;
}

export const Form = (props: Props) => {
  return (
    <div className="panel-body">
      <form role="form">
        <fieldset>
          <div className="form-group">
      		  <input className="form-control" placeholder="E-mail" name="email" type="text"
              value={props.loginInfo.login}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(e : any) => props.updateLoginInfo({login: e.target.value, password: props.loginInfo.password })}
            />
      		</div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" type="password"
              value={props.loginInfo.password}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(e : any) => props.updateLoginInfo({login: props.loginInfo.login, password: e.target.value })}
            />
          </div>
          <input type="button" className="btn btn-lg btn-success btn-block" value="Login"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={(e) => {props.performLogin()}}
          />
        </fieldset>
      </form>
    </div>
  );
}
