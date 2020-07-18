import React, { useState, useEffect } from 'react';

import { ResultList, ResultListSkeleton } from 'Components'
import { IUser } from 'Types'

import { Container } from './styles';

const usersMock = [
  { id: '0', name: 'Itor', description: 'Dev JS', flowers: 50, following: false, avatar: 'https://avatars1.githubusercontent.com/u/22206344?s=460&u=cb8da4e09dca17efdb1859de382b5c1038a57f14&v=4' },
  { id: '1', name: 'Vitor', description: 'Dev Java', flowers: 20, following: true, avatar: 'https://avatars1.githubusercontent.com/u/22206344?s=460&u=cb8da4e09dca17efdb1859de382b5c1038a57f14&v=4' },
  { id: '2', name: 'Higor', description: 'Dev C#', flowers: 12, following: true, avatar: 'https://avatars1.githubusercontent.com/u/22206344?s=460&u=cb8da4e09dca17efdb1859de382b5c1038a57f14&v=4' }
]

const Result: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setUsers(usersMock)
    }, 5000);
  }, []);

  return (
    <Container>
      {
        loading ?
          <ResultListSkeleton /> :
          <ResultList users={users} />
      }
    </Container>
  );
}

export default Result;
