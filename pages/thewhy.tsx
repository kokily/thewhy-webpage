import type { NextPage } from 'next';
import Login from '../components/auth/Login';
import PageTemplate from '../components/common/PageTemplate';

const LoginPage: NextPage = () => {
  return (
    <PageTemplate>
      <Login />
    </PageTemplate>
  );
};

export default LoginPage;
