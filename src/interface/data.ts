export interface INotes {
  id: string;
  name: string;
  content: string;
  craeted: string;
  category: string;
  dates: string;
  archived: boolean;
}

export interface IAddNotes {
  name: string;
  content: string;
  category: string;
}

export interface IPatchNotes {
  name: string;
  content: string;
  category: string;
  archived: boolean;
}

export interface IStat {
  active: number;
  archived: number;
  category: string;
}
