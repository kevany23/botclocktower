"use client"
import React, { Component, BaseSyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer, changePage, GameCreatorPage } from '../redux/gamecreatorslice';
import { setPhase } from '../redux/gamephaseslice';
import { RootState, AppDispatch } from '../store'
import NameCard from './simple/name_card';
import { RoleInfo } from '../types/index';
import { RoleType } from '../types/roles/role';
import { GamePhase } from '../types/game_state';
import { ClassLineup, getClassLineup } from '../util/botc_math'
import { booleanFilter, getRandomIndex } from '../util/util'
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
  const { townsfolk, outsiders, minions, demons } = rolesheet;
  const [selectedTownsfolk, setSelectedTownsfolk] = useState(new Array(townsfolk.length).fill(true));
  const [selectedOutsiders, setSelectedOutsiders] = useState(new Array(outsiders.length).fill(true));
  const [selectedMinions, setSelectedMinions] = useState(new Array(minions.length).fill(true));
  const [selectedDemons, setSelectedDemons] = useState(new Array(demons.length).fill(true));

  const handleCheckbox = function(idx: number, roletype: RoleType) {
    if (roletype === RoleType.Townsfolk) {
      selectedTownsfolk[idx] = !selectedTownsfolk[idx];
      setSelectedTownsfolk([...selectedTownsfolk]);
    } else if (roletype === RoleType.Outsider) {
      selectedOutsiders[idx] = !selectedOutsiders[idx];
      setSelectedOutsiders([...selectedOutsiders]);
    } else if (roletype === RoleType.Minion) {
      selectedMinions[idx] = !selectedMinions[idx];
      setSelectedMinions([...selectedMinions]);
    } else if (roletype === RoleType.Demon) {
      selectedDemons[idx] = !selectedDemons[idx];
      setSelectedDemons([...selectedDemons]);
    }
  };

  const handleSubmit = function(evt: BaseSyntheticEvent) {
    const usableTownsfolk = booleanFilter(townsfolk, selectedTownsfolk);
    const usableOutsiders = booleanFilter(outsiders, selectedOutsiders);
    const usableMinions = booleanFilter(minions, selectedMinions);
    const usableDemons = booleanFilter(demons, selectedDemons);
    createNewGame(players, usableTownsfolk, usableOutsiders, usableMinions, usableDemons);
    dispatch(setPhase(GamePhase.GAME_START));
    evt.preventDefault();
  };

  return (
    <div>
      <form>
      <h3>Townsfolk</h3>
      {
        townsfolk.map((role, idx) => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedTownsfolk[idx]} onChange={() => handleCheckbox(idx, RoleType.Townsfolk)} />
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Outsiders</h3>
      {
        outsiders.map((role, idx) => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedOutsiders[idx]} onChange={() => handleCheckbox(idx, RoleType.Outsider)} />
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Minions</h3>
      {
        minions.map((role, idx) => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedMinions[idx]} onChange={() => handleCheckbox(idx, RoleType.Minion)} />
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <h3>Demons</h3>
      {
        demons.map((role, idx) => {
          return (
            <>
              <input type="checkbox" name="checkbox" checked={selectedDemons[idx]} onChange={() => handleCheckbox(idx, RoleType.Demon)}/>
              <h5 className="role-title">{role.name}</h5>
              <p>{role.description}</p>
            </>
          );
        })
      }
      <br/>
      <p>* Not the first night</p>
      <br/>
      <button onClick={handleSubmit}>
        Next
      </button>
      </form>
    </div>
  )
}

function checkRoles(numPlayers: number, numTownsfolk: number,
  numOutsiders: number, numMinions: number, numDemons: number) {
  if (numPlayers < 7) {
    // Not enough players
    alert("Not enough players");
    return false;
  }
  if (numPlayers > 16) {
    alert("Too many players");
    return false;
  }
  const lineup = getClassLineup(numPlayers) as ClassLineup;
  // check if number of each category matches
  if (!lineup) {
    alert("Invalid Number of Players");
    return false;
  }
  if (numTownsfolk < lineup.numTownsfolk) {
    alert("Not enough Townsfolk selected");
    return false;
  }
  if (numOutsiders < lineup.numOutsiders) {
    alert("Not enough Outsiders selected");
    return false;
  }
  if (numMinions < lineup.numMinions) {
    alert("Not enough Minions selected");
    return false;
  }
  if (numDemons < lineup.numDemons) {
    alert("Not enough Demons selected");
    return false;
  }
  return true;
}

function getArrayCount(array: boolean[]): number {
  let num = 0;
  for (let item of array) {
    // Avoid runtime error involving truthy values
    if (item === true) {
      num++;
    }
  }
  return num;
}

function assignRoles() {
  // first we get the individual roles from the state
}

function createNewGame(players: string[],
  selectedTownsfolk: RoleInfo[],
  selectedOutsiders: RoleInfo[],
  selectedMinions: RoleInfo[],
  selectedDemons: RoleInfo[]) {
    let check = checkRoles(players.length, selectedTownsfolk.length,
      selectedOutsiders.length, selectedMinions.length,
      selectedDemons.length);
    if (!check) {
      return;
    }
  // assign players to these roles
  // initialize role assigments
  const roleAssignments = new Map<string, RoleInfo>();
  let unassignedPlayers = [...players];

  // get counts of roles to assign
  const lineup = getClassLineup(players.length) as ClassLineup;
  console.log(lineup);
  

  // iterate through townsfolk, outsiders, chooser random from both lists
  // assign townsfolk
  let unassignedTownsfolk = [...selectedTownsfolk];
  for (let i = 0; i < lineup.numTownsfolk; i++) {
    let idx = getRandomIndex(unassignedPlayers);
    let player = unassignedPlayers[idx];
    unassignedPlayers.splice(idx, 1);
    // assign player to random townsfolk role
    idx = getRandomIndex(unassignedTownsfolk);
    let role = unassignedTownsfolk[idx];
    unassignedTownsfolk.splice(idx, 1);
    roleAssignments.set(player, role);
  }

  let unassignedOutsiders = [...selectedOutsiders];
  for (let i = 0; i < lineup.numOutsiders; i++) {
    let idx = getRandomIndex(unassignedPlayers);
    let player = unassignedPlayers[idx];
    unassignedPlayers.splice(idx, 1);
    // assign player to random townsfolk role
    idx = getRandomIndex(unassignedOutsiders);
    let role = unassignedOutsiders[idx];
    unassignedOutsiders.splice(idx, 1);
    roleAssignments.set(player, role);
  }
  let unassignedMinions = [...selectedMinions];
  for (let i = 0; i < lineup.numMinions; i++) {
    let idx = getRandomIndex(unassignedPlayers);
    let player = unassignedPlayers[idx];
    unassignedPlayers.splice(idx, 1);
    // assign player to random townsfolk role
    idx = getRandomIndex(unassignedMinions);
    let role = unassignedMinions[idx];
    unassignedMinions.splice(idx, 1);
    roleAssignments.set(player, role);
  }
  let unassignedDemons = [...selectedDemons];
  for (let i = 0; i < lineup.numDemons; i++) {
    let idx = getRandomIndex(unassignedPlayers);
    let player = unassignedPlayers[idx];
    unassignedPlayers.splice(idx, 1);
    // assign player to random townsfolk role
    idx = getRandomIndex(unassignedDemons);
    let role = unassignedDemons[idx];
    unassignedDemons.splice(idx, 1);
    roleAssignments.set(player, role);
  }
  console.log(roleAssignments);
}

// TODO: Make redux call to start the game
