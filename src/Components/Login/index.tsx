import * as React from 'react';
import { connect } from 'react-redux';
import { loginRequestStartedAction, updateEditingLogin } from '../../actions/login';
import { LoginEntity } from '../../Model/login';
import {Form} from './fragments/form';
import {Header} from './fragments/header';

interface Props {
    loginInfo : LoginEntity;
    updateLoginInfo : (loginInfo : LoginEntity) => void;
    performLogin : (loginInfo : LoginEntity) => void;
 }
 
 export const LoginComponent = (props : Props) => {
   return (
     <div className="container">
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <div className="panel panel-default">
             <Header/>
             <Form loginInfo={props.loginInfo}
                   // tslint:disable-next-line:jsx-no-bind
                   updateLoginInfo={props.updateLoginInfo.bind(this)}
                   // tslint:disable-next-line:jsx-no-lambda
                   performLogin={() => props.performLogin(props.loginInfo)}
                   />
           </div>
         </div>
       </div>
     </div>
   )
 }
 
const mapStateToProps = (state) => {
    return {
      loginInfo: state.session.editingLogin      
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginInfo: (loginInfo : LoginEntity) => dispatch(updateEditingLogin(loginInfo)),
    performLogin: (loginInfo : LoginEntity) => dispatch(loginRequestStartedAction(loginInfo))        
  }
}

export const LoginContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(LoginComponent);
