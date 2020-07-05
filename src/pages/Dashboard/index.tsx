import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Bem vindo(a): {user.name}</h2>
    </Container>
  );
};

export default Dashboard;
