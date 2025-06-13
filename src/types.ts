interface MonthFlags {
  jan: boolean;
  feb: boolean;
  mar: boolean;
  apr: boolean;
  may: boolean;
  jun: boolean;
  jul: boolean;
  aug: boolean;
  sep: boolean;
  oct: boolean;
  nov: boolean;
  dec: boolean;
}
export type MonthKey = keyof MonthFlags;

export interface Plant {
  plantId: number;
  plantName: string;
  plantType: string;
  whenToPlant: MonthFlags;
  whenToHarvest: MonthFlags;
}

