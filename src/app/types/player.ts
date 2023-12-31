import { Role } from './roles/role';
import { Character } from './roles/character';

export interface PlayerInterface {
  name: string,
  role: Role,
  character: Character,
  isAlive: boolean,
  isPoisoned: boolean,
  hasGhostVote: boolean,
}

export class Player implements PlayerInterface {
  isAlive = true;
  isPoisoned = false;
  hasGhostVote = true;
  name: string;
  role: Role;
  character: Character;
  constructor(name: string, role: Role, character: Character) {
    this.name = name;
    this.role = role;
    this.character = character;
  }
}