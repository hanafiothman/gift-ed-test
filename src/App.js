import useAuth from 'hooks/useAuth';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import CreateAccount from 'views/auth/CreateAccount';
import Login from 'views/auth/Login';
import AuthLayout from 'views/layout/AuthLayout';

const App = () => {
  const location = useLocation();

  const { token } = useAuth();

  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route index element={<Navigate to={'/create_account'}/>}/>
        <Route path={'create_account'} element={<CreateAccount/>}/>
        <Route
          path={'login'}
          element={token ? <Navigate to={location.state?.from?.pathname || '/dashboard'} /> : <Login/>}
        />
      </Route>
      <Route
        element={token ? <div>Hanafi</div> : <Navigate to={'/login'} state={{ from: location }} replace/>}
      />
    </Routes>
);
}

export default App;
