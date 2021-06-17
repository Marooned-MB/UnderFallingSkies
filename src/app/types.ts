export enum Side {
    EASY, HARD
}

export enum ShipType {
    regular, extra
}

export interface Ship {
    type: ShipType;
}

export enum MothershipEventType {
    EMPTY, DAMAGE, EXCAVATOR, RESEARCH, SHIP
}

export enum SkyFieldEventType {
    EMPTY, MOVE, MOTHERSHIP, EXPLOSION
}

export enum CityFieldType {
    EMPTY, ARTILLERY, ENERGY, SHOOT, RESEARCH, ROBOT
}

export interface MothershipEvent {
    type: MothershipEventType;
    strength?: number;
}

export interface SkyFieldEvent {
    type: SkyFieldEventType;
    strength?: number;
}

export interface CityField {
    id: number;
    type: CityFieldType;
    position: {x: number, y: number};
    energy?: number;
    modifier?: number;
    connectedWith?: number[];
    excavatorStart?: boolean;
}

export interface MothershipCard {
    side: Side;
    position: number;
}    

export interface SkyCard {
    order: number;
    side: Side;
    events: MothershipEvent[];
    fields: SkyFieldEvent[][];
}

export interface CityCard {
    name: string;
    fields: CityField[];
}    

export interface Board {
    mothership: MothershipCard;
    sky: SkyCard[];
    city: CityCard[];
}