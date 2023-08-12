"use client"
import React, { Component, BaseSyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer, changePage, GameCreatorPage } from '../redux/gamecreatorslice';
import { RootState, AppDispatch } from '../store'
import NameCard from './simple/name_card';
import { getClassLineup } from '../util/botc_math'
import * as rolesheet from '../../../public/troublebrewing.json'
import './game_creator.css'

export default function GameCreator() {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.gameCreator.page)
  const [playerInput, setPlayerInput] = useState("");
  if (page === GameCreatorPage.PlayerAdder) {
    return (
      <PlayerAdder/>
    );
  } else {
    return (
      <RoleSelector/>
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
  const [selectedRoles, setSelectedRoles] = useState(new Array(rolesheet.total as number).fill(true));
  const { townsfolk, outsiders, minions, demons } = rolesheet;
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
  const handleCheckbox = function(id: number) {
    selectedRoles[id] = !selectedRoles[id];
    setSelectedRoles([...selectedRoles]);
  }
  return (
    <div>
      <form>
      <h3>Townsfolk</h3>
      {
        townsfolk.map(role => {
          return (
            <>
             <input type="checkbox" name="checkbox" checked={selectedRoles[role.id]} onChange={() => handleCheckbox(role.id)}/>
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Outsiders</h3>
      {
        outsiders.map(role => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedRoles[role.id]} onChange={() => handleCheckbox(role.id)}/>
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Minions</h3>
      {
        minions.map(role => {
          return (
            <>
              <input type="checkbox" name="checkbox"checked={selectedRoles[role.id]} onChange={() => handleCheckbox(role.id)}/>
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Demons</h3>
      {
        demons.map(role => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedRoles[role.id]} onChange={() => handleCheckbox(role.id)}/>
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <p>* Not the first night</p>
      <br/>
      <button onClick={(evt) =>{
        console.log(selectedRoles);
        checkRoles(players, selectedRoles);
        evt.preventDefault();
        }}>
        Next
      </button>
      </form>
    </div>
  )
}

function checkRoles(players: string[], roles) {
  // get player count
  console.log('checkRoles()')
  console.log(players)
  const numPlayers = players.length;
  if (numPlayers < 7) {
    // Not enough players
    alert("Not enough players")
    return
  }
  if (numPlayers > 16) {
    alert("Too many players")
  }
  const lineup = getClassLineup(numPlayers);
  console.log(lineup)
  // check if number of each category matches


}

//TODO: break up the array into smaller ones
function getRoleCounts() {

}