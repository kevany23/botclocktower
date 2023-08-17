export enum RoleType {
  Townsfolk,
  Outsider,
  Minion,
  Demon,
  Traveller
}

export interface RoleInfo {
  name: string,
  description: string
}