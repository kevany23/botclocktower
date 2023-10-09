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
  abilityType: AbilityType = AbilityType.Night1;
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Librarian extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Investigator extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Chef extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Empath extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Fortuneteller extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Undertaker extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Monk extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Slayer extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Soldier extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Ravenkeeper extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Virgin extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Mayor extends Townsfolk {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Butler extends Outsider {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Saint extends Outsider {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Recluse extends Outsider {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Drunk extends Outsider {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Poisoner extends Minion {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Spy extends Minion {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Baron extends Minion {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Scarletwoman extends Minion {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

export class Imp extends Demon {
  constructor() {
    super();
  }
  useAbility() {
    
  }
}

/**
 * Map role enum to its Character class
 */

export function roleToCharacter(role: Role) {
  switch(role) {
    case Role.Washerwoman:
      return Washerwoman;
    case Role.Librarian:
      return Librarian;
    case Role.Investigator:
      return Investigator;
    case Role.Chef:
      return Chef;
    case Role.Empath:
      return Empath;
    case Role.Fortuneteller:
      return Fortuneteller;
    case Role.Undertaker:
      return Undertaker;
    case Role.Monk:
      return Monk;
    case Role.Slayer:
      return Slayer;
    case Role.Soldier:
      return Soldier;
    case Role.Ravenkeeper:
      return Ravenkeeper;
    case Role.Virgin:
      return Virgin;
    case Role.Mayor:
      return Mayor;
    case Role.Saint:
      return Saint;
    case Role.Recluse:
      return Recluse;
    case Role.Drunk:
      return Drunk;
    case Role.Poisoner:
      return Poisoner;
    case Role.Spy:
      return Spy;
    case Role.Baron:
      return Baron;
    case Role.Scarletwoman:
      return Scarletwoman;
    case Role.Imp:
      return Imp;
    default:
      return null;
  }
}


// TODO: make call to get and change game information
// Create Player state