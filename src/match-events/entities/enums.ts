export enum PlayerSide {
  home = 'home',
  away = 'away',
}

export enum TimeoutSide {
  home = 'home',
  away = 'away',
  referee = 'referee',
}

export enum TimeoutType {
  regular = 'regular',
  medical = 'medical',
  end = 'end',
}

export enum GameState {
  notStarted = 'notStarted',
  inProgress = 'inProgress',
  finished = 'finished',
  interrupted = 'interrupted',
}
