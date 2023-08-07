import React, { Component, BaseSyntheticEvent } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';
import './name_card.css'

interface NameCardProps {
  name: string,
  deletable ?: boolean
}

export default function NameCard(props: any) {
  return (
    <div className="name-card row-div" style={{height: "50px"}}>
      <div className="name-div" style={{height: "40px", marginRight: "20px"}}>
        <p>{props.name}</p>
      </div>
      <Button className="small-inline-button" variant="danger"><BsTrashFill/></Button>
    </div>
  )
}