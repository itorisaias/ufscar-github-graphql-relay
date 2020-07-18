import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

import { IUser } from 'Types'

// import { Container } from './styles';

type ResultDetailProps = {
  user: IUser
}

const ResultDetail = (props: ResultDetailProps) => {
  const { user } = props

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`photo user ${user.name}`} src={user.avatar.toString()} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
      />
    </ListItem>
  )
}

export default ResultDetail;