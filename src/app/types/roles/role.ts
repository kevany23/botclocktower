export enum Role {
  Washerwoman,
  Librarian,
  Investigator,
  Chef,
  Empath,
  Fortuneteller,
  Undertaker,
  Monk,
  Slayer,
  Soldier,
  RavenKeeper,
  Virgin,
  Mayor,
  Butler,
  Saint,
  Recluse,
  Drunk,
  Poisoner,
  Spy,
  Baron,
  Scarletwoman,
  Imp,
  None
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