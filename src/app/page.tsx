"use client"
import Image from 'next/image'
import styles from './layout.module.css'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { todoSlice, addTodo } from './redux/todoslice'
import { addPlayer } from './redux/gamecreatorslice'
import { ReduxProvider } from './provider'
import { RootState, AppDispatch } from './store'
import GameCreator from './components/game_creator'
import GameStart from './components/game_start'
import { Container, Row, Col } from 'react-bootstrap';
import { GamePhase } from './types/game_state'

export default function Home() {
  const dispatch = useDispatch();
  const phase = useSelector((state: RootState) => state.gamePhase.phase);
  let screen = <p>Default Screen</p>;
  if (phase == GamePhase.GAME_CREATOR) {
    screen = <GameCreator/>
  }
  else if (phase == GamePhase.GAME_START) {
    screen = <GameStart/>
  }
  return (
      <main className={styles.main}>
        <div>
          <h1> Blood on the Clocktower </h1>
          <div id="game-screen">
            {screen}
          </div>
        </div>
      </main>
  )
}
