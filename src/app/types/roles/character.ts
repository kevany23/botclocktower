import { Role, RoleType } from './role';

/**
 * Role is the "name" of the character type.
 * 
 * Character has the implementation details
 */

export abstract class Character {
  role: Role;
  roletype: RoleType;
  constructor(role: Role, roletype: RoleType) {
    this.role = role; 
    this.roletype = roletype;
  }
  getDescription() {

  }
  useAbility() {

  }
}

export abstract class Townsfolk extends Character {
  constructor(role: Role) {
    super(role, RoleType.Townsfolk);
  }
}

export abstract class Outsider extends Character {
  constructor(role: Role) {
    super(role, RoleType.Outsider);
  }
}

export abstract class Minion extends Character {
  constructor(role: Role) {
    super(role, RoleType.Minion);
  }
}

export abstract class Demon extends Character {
  constructor(role: Role) {
    super(role, RoleType.Demon);
  }
}

export class Washerwoman extends Townsfolk {
  constructor() {
    super(Role.Washerwoman);
  }
}