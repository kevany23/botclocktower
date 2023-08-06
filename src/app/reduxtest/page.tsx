"use client"
import Image from 'next/image'
import styles from '../layout.module.css'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { todoSlice, addTodo } from '../redux/todoslice'
import { addPlayer } from '../redux/playerslice'
import { ReduxProvider } from '../provider'
import { RootState, AppDispatch } from '../store'
import {Container, Row, Col} from 'react-bootstrap';

export default function Home() {
  console.log('load')
  console.log(useDispatch);
  console.log(todoSlice);
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);
  const players = useSelector((state: RootState) => state.players);
  return (
    <>
      <main className={styles.main}>
        <div>
        <h1> Blood on the Clocktower </h1>
        <div id="game-screen">
          <div>
            {todo.map((item, idx) => <p key={idx}>{item}</p>)}
            <button onClick={() => dispatch(addTodo("baz"))}>setState</button>
          </div>
          <div>
            {players.map((item, idx) => <p key={idx}>{item}</p>)}
            <button onClick={() => dispatch(addPlayer("sej"))}>setState</button>
          </div>
        </div>

        <Container>
          Hello
        </Container>
        </div>
      </main>
    </>
  )
}
