import { Navigate, Route, Routes } from 'react-router-dom';
import CreateAccount from 'views/auth/CreateAccount';
import Login from 'views/auth/Login';
import AuthLayout from 'views/layout/AuthLayout';

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route index element={<Navigate to={'/create_account'}/>}/>
        <Route path={'create_account'} element={<CreateAccount/>}/>
        <Route path={'login'} element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
