export enum Role {
  Washerwoman = "Washerwoman",
  Librarian = "Librarian",
  Investigator = "Investigator",
  Chef = "Chef",
  Empath = "Empath",
  Fortuneteller = "Fortuneteller",
  Undertaker = "Undertaker",
  Monk = "Monk",
  Slayer = "Slayer",
  Soldier = "Soldier",
  Ravenkeeper = "Ravenkeeper",
  Virgin = "Virgin",
  Mayor = "Mayor",
  Butler = "Butler",
  Saint = "Saint",
  Recluse = "Recluse",
  Drunk = "Drunk",
  Poisoner = "Poisoner",
  Spy = "Spy",
  Baron = "Baron",
  Scarletwoman = "Scarletwoman",
  Imp = "Imp",
  None = "None"
}

export enum RoleType {
  Townsfolk,
  Outsider,
  Minion,
  Demon,
  Traveller,
  None
}

/**
 * If Role has multiple ability types,
 * it will have another field to list them all
 */
export enum AbilityType {
  GameStart,
  Nightly,
  Night1,
  Nightly2,
  OneTimeDay,
  Other,
  Persistent,
  Multiple,
  Triggered,
  None
}