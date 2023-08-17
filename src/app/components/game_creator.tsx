"use client"
import React, { Component, BaseSyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer, changePage, GameCreatorPage } from '../redux/gamecreatorslice';
import { RootState, AppDispatch } from '../store'
import NameCard from './simple/name_card';
import { RoleType } from '../types/index'
import { ClassLineup, getClassLineup } from '../util/botc_math'
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
    const numTownsfolk = getArrayCount(selectedTownsfolk);
    const numOutsiders = getArrayCount(selectedOutsiders);
    const numMinions = getArrayCount(selectedMinions);
    const numDemons = getArrayCount(selectedDemons);
    checkRoles(players.length, numTownsfolk, numOutsiders, numMinions, numDemons);
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
             <input type="checkbox" name="checkbox" checked={selectedTownsfolk[idx]} onChange={() => handleCheckbox(idx, RoleType.Townsfolk)}/>
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
              <input type="checkbox" name="checkbox" checked={selectedOutsiders[idx]} onChange={() => handleCheckbox(idx, RoleType.Outsider)}/>
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
              <input type="checkbox" name="checkbox"checked={selectedMinions[idx]} onChange={() => handleCheckbox(idx, RoleType.Minion)}/>
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
  // get player count
  console.log('checkRoles()');
  console.log(numTownsfolk);
  console.log(numOutsiders);
  console.log(numMinions);
  console.log(numDemons);
  if (numPlayers < 7) {
    // Not enough players
    alert("Not enough players");
    return;
  }
  if (numPlayers > 16) {
    alert("Too many players");
    return;
  }
  const lineup = getClassLineup(numPlayers) as ClassLineup;
  // check if number of each category matches
  if (!lineup) {
    alert("Invalid Number of Players");
    return;
  }
  if (numTownsfolk < lineup.numTownsfolk) {
    alert("Not enough Townsfolk selected");
    return;
  }
  if (numOutsiders < lineup.numOutsiders) {
    alert("Not enough Outsiders selected");
    return;
  }
  if (numMinions < lineup.numMinions) {
    alert("Not enough Minions selected");
    return;
  }
  if (numDemons < lineup.numDemons) {
    alert("Not enough Demons selected");
    return;
  }
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
  
}

function createNewGame() {

}

//TODO: Get selected roles, Assign Roles, Create Game