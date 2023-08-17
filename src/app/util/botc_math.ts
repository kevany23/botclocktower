/**
 * Get number of townfolk, outsiders, minions, and demons.
 * Game must have at least 7 players, up to 16 players
 * 
 * The following formula is used:
 * Outsiders, 7 players = 0, 8 players = 1, 9 players = 2,
 * 10 players = 0, etc.
 * Minions: 7-9 Players = 1, 10-12 Players = 2, 13-15 Players = 3,
 * 16-18 Players = 4
 */
export interface ClassLineup {
  numTownsfolk: number,
  numOutsiders: number,
  numMinions: number,
  numDemons: 1,
  numTravellers?: number,
}
export function getClassLineup(numPlayers: number): ClassLineup | null {
  if (numPlayers < 7 || numPlayers > 16) {
    return null;
  }
  switch (numPlayers) {
    case 7:
      return {
        numTownsfolk: 5,
        numOutsiders: 0,
        numMinions: 1,
        numDemons: 1
      };
      case 8:
        return {
          numTownsfolk: 5,
          numOutsiders: 1,
          numMinions: 1,
          numDemons: 1
        };
      case 9:
      return {
        numTownsfolk: 5,
        numOutsiders: 2,
        numMinions: 1,
        numDemons: 1
      };
      case 10:
        return {
          numTownsfolk: 7,
          numOutsiders: 0,
          numMinions: 2,
          numDemons: 1
        }
      case 11:
      return {
        numTownsfolk: 7,
        numOutsiders: 1,
        numMinions: 2,
        numDemons: 1
      };
      case 12:
      return {
        numTownsfolk: 7,
        numOutsiders: 2,
        numMinions: 2,
        numDemons: 1
      };
      case 13:
      return {
        numTownsfolk: 9,
        numOutsiders: 0,
        numMinions: 3,
        numDemons: 1
      };
      case 14:
      return {
        numTownsfolk: 9,
        numOutsiders: 1,
        numMinions: 3,
        numDemons: 1
      };
      case 15:
      return {
        numTownsfolk: 9,
        numOutsiders: 2,
        numMinions: 3,
        numDemons: 1
      };
      case 16:
      return {
        numTownsfolk: 11,
        numOutsiders: 0,
        numMinions: 4,
        numDemons: 1
      };
      case 17:
      return {
        numTownsfolk: 11,
        numOutsiders: 1,
        numMinions: 4,
        numDemons: 1
      };
      case 18:
      return {
        numTownsfolk: 11,
        numOutsiders: 2,
        numMinions: 4,
        numDemons: 1
      };
      default:
        return null;
  }
}