import React from 'react';
import { List, Divider } from '@material-ui/core';

import { ResultDetail } from 'Components'
import { IUser } from 'Types'

// import { Container } from './styles';

type ResultDetailProps = {
  users: Array<IUser>
}

const ResultList = (props:ResultDetailProps) => {
  const { users } = props

  return (
    <List>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <ResultDetail user={user} />

            {
              (index + 1 === users.length) ?
                null :
                <Divider variant="inset" component="li" />
            }
          </div>
        )
      })}
    </List>
  );
}

export default ResultList;
