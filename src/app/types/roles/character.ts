import { Role, RoleType, AbilityType } from './role';

/**
 * Role is the "name" of the character type.
 * 
 * Character has the implementation details
 */

export abstract class Character {
  role: Role = Role.None;
  roleType: RoleType = RoleType.None;
  abilityType: AbilityType = AbilityType.None;
  constructor() {
  }
  getDescription() {

  }
  useAbility() {

  }
}

export abstract class Townsfolk extends Character {
  roleType: RoleType = RoleType.Townsfolk;
  constructor() {
    super();
  }
}

export abstract class Outsider extends Character {
  roleType: RoleType = RoleType.Outsider;
  constructor() {
    super();
  }
}

export abstract class Minion extends Character {
  roleType: RoleType = RoleType.Minion;
  constructor() {
    super();
  }
}

export abstract class Demon extends Character {
  roleType: RoleType = RoleType.Demon;
  constructor() {
    super();
  }
}

export class Washerwoman extends Townsfolk {
  abilityType: AbilityType = AbilityType.Start;
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

// TODO: make call to get and change game information