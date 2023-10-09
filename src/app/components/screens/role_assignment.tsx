import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState, AppDispatch } from '../../store'

import { PlayerInterface } from '../../types/player';
import { Role } from '../../types/roles/role';

interface RoleAssignmentProps {
  players: PlayerInterface[]
}

/**
 * Intermediate screen for telling players their roles and starting
 * info
 */
export default function RoleAssignmentScreen(props: RoleAssignmentProps) {
  const dispatch = useDispatch();
  const { players } = props;
  return <div id="role-assignment">
    <h1> Player name: {players[0].name}</h1>
    <p> Your role is {Role[players[0].role]}</p>
  </div>;
}