"use client"
import Image from 'next/image'
import styles from './layout.module.css'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { todoSlice, addTodo } from './redux/todoslice'
import { addPlayer } from './redux/playerslice'
import { ReduxProvider } from './provider'
import { RootState, AppDispatch } from './store'
import GameCreator from './components/game_creator'
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  console.log('load')
  console.log(useDispatch);
  console.log(todoSlice);
  const dispatch = useDispatch();
  const isGameRunning = useSelector((state: RootState) => state.gameState.isGameRunning);
  let screen = <p>Default Screen</p>;
  if (!isGameRunning) {
    screen = <GameCreator/>
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
