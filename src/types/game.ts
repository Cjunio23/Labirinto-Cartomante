export interface Choice {
  text: string;
  nextNode: string;
  icon?: string;
}

export interface StoryNode {
  id: string;
  text: string;
  choices?: Choice[];
  isEnding?: boolean;
  endingType?: 'tragic' | 'mysterious' | 'truth' | 'liberation';
  sound?: string;
  animation?: string;
}

export interface GameState {
  currentNode: string;
  history: string[];
  startTime: number;
}
