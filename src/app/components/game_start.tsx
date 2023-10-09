"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState, AppDispatch } from '../store'
import PassDeviceScreen from './screens/pass_device';
import RoleAssignmentScreen from './screens/role_assignment';

/**
 * In game start, we tell every player their roles
 */
export default function GameStart() {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.gameState.players);
  const [devicePassed, setDevicePassed] = useState(false);
  if (devicePassed) {
    return (
      <div id="game-start">
        <PassDeviceScreen name={"Michael"} />
        <button onClick={() => setDevicePassed(false)}>Next</button>
      </div>
    );
  } else {
    return (
      <div id="game-start">
        <RoleAssignmentScreen players={players} />
        <button onClick={() => setDevicePassed(true)}>Next</button>
      </div>
    );
  }
}