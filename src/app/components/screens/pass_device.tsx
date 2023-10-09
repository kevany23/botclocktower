import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState, AppDispatch } from '../../store'

interface PassDeviceProps {
  name: string
}

/**
 * Intermediate screen for telling players their roles and starting
 * info
 */
export default function PassDeviceScreen(props: PassDeviceProps) {
  const dispatch = useDispatch();
  return <div id="pass-device">
    <h1> Pass the device to {props.name}</h1>
  </div>;
}