"use client"
import React, { Component, BaseSyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer, changePage, GameCreatorPage } from '../redux/gamecreatorslice';
import { RootState, AppDispatch } from '../store'
import NameCard from './simple/name_card';
import * as data from '../../../public/troublebrewing.json'

export default function GameCreator() {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.gameCreator.page)
  const [playerInput, setPlayerInput] = useState("");
  if (page === GameCreatorPage.PlayerAdder) {
    return (
      <PlayerAdder />
    );
  } else {
    return (
      <RoleSelector />
    )
  }
}

 function PlayerAdder() {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.gameCreator.players);
  const [playerInput, setPlayerInput] = useState("");
  const handleClick = function(evt: BaseSyntheticEvent) {
    // check empty
    if (playerInput === "") {
      evt.preventDefault();
      return;
    }
    dispatch(addPlayer(playerInput));
    setPlayerInput("");
    evt.preventDefault();
  }
  const handleChange = function(evt: BaseSyntheticEvent) {
    setPlayerInput(evt.target.value);
  }
  return (
    <div>
      <div>
        {players.map((item, idx) => <NameCard key={idx} name={item} deletable={true}/>)}
      </div>
      <form>
        <input placeholder="Enter name" value={playerInput}
        onChange={handleChange}/>
        <button onClick={handleClick}>Add Player</button>
      </form>
      <br></br>
      <button onClick={() => dispatch(changePage(GameCreatorPage.RoleSelect))}>
        Next
      </button>
    </div>
  )
}

function RoleSelector() {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.gameCreator.players);
  const [playerInput, setPlayerInput] = useState("");
  const handleClick = function(evt: BaseSyntheticEvent) {
    // check empty
    if (playerInput === "") {
      evt.preventDefault();
      return;
    }
    dispatch(addPlayer(playerInput));
    setPlayerInput("");
    evt.preventDefault();
  }
  const handleChange = function(evt: BaseSyntheticEvent) {
    setPlayerInput(evt.target.value);
  }
  return (
    <div>
      RoleSelector
    </div>
  )
}