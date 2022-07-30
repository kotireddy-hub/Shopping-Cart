import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Input } from 'reactstrap';
import { SetUser } from '../../services/storage.service';
import { CartContext } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import "../register/register.scss";

const Login = () => {
  const { logUser } = useContext(CartContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
      e.preventDefault();
        let user = SetUser.validUser(email, password);
          if(user) {
            logUser(user);
            history.push("/");
          }
    }

    return (
        <Layout title="Cart" description="This is the Cart page" >
        <form className="mt-5 col-sm-9">
              <h3>Login</h3>
              <div className="form-group">
                  <label>Email address</label>
                  <Input type="email" name="emailid" className="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <Input type="password" name="password" className="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <Button  onClick={(e) => loginUser(e)} className="registerBtn">Login</Button>
          </form>
        </Layout>
     );
}

export default Login;
