import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';
import { deletePlayer } from '../../redux/gamecreatorslice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './name_card.css'

interface NameCardProps {
  name: string,
  deletable ?: boolean
}

export default function NameCard(props: NameCardProps) {
  const dispatch = useDispatch();

  const deleteNameCard = function(name: string) {
    dispatch(deletePlayer(name))
  }
  return (
    <div className="name-card row-div" style={{height: "50px"}}>
      <div className="name-div" style={{height: "40px", marginRight: "20px"}}>
        <p>{props.name}</p>
      </div>
      {props.deletable ?
      <Button className="small-inline-button" variant="danger"
        onClick={() => {deleteNameCard(props.name)}}>
        <BsTrashFill/>
        </Button> : <></>
    }
    </div>
  )
}