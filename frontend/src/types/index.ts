export interface Card {
  suit: 'H' | 'D' | 'C' | 'S';
  rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K';
}

export interface Player {
  id: string;
  username: string;
  chipsStack: number;
  position: 'dealer' | 'small_blind' | 'big_blind' | 'player';
  isActive: boolean;
}

export interface PokerTable {
  id: string;
  name: string;
  maxPlayers: number;
  smallBlind: number;
  bigBlind: number;
  players: Player[];
  pot: number;
}
