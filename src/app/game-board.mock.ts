import { SkyCard, SkyFieldEventType, MothershipEventType, Side, CityCard, CityFieldType, MothershipCard } from "./types";

export const MothershipEasy: MothershipCard = {
    side: Side.EASY,
    position: 0
};

export const SkyCard0Easy: SkyCard = {
    order: 0,
    side: Side.EASY,
    events: [
        { type: MothershipEventType.EMPTY },
        { type: MothershipEventType.EXCAVATOR, strength: -1 },
        { type: MothershipEventType.SHIP },
        { type: MothershipEventType.RESEARCH, strength: -1 }
    ],
    fields: [
        [
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY }
        ],
        [
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.MOVE, strength: -1 },
            { type: SkyFieldEventType.EMPTY }
        ],
        [
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EXPLOSION, strength: 1 },
            { type: SkyFieldEventType.MOVE, strength: 1 },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY }
        ],
        [
            { type: SkyFieldEventType.EXPLOSION, strength: 2 },
            { type: SkyFieldEventType.MOVE, strength: 1 },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.EMPTY },
            { type: SkyFieldEventType.MOTHERSHIP }
        ]
    ]
};

export const EasyCityUpper: CityCard = {
    name: 'Easy City Upper',
    fields: [
        { position: {x: 4, y: 0}, id: 0, type: CityFieldType.ARTILLERY },
        { position: {x: 3, y: 0}, id: 1, type: CityFieldType.ARTILLERY },
        { position: {x: 2, y: 0}, id: 2, type: CityFieldType.ARTILLERY },
        { position: {x: 1, y: 0}, id: 3, type: CityFieldType.ARTILLERY },
        { position: {x: 0, y: 0}, id: 4, type: CityFieldType.ARTILLERY },

        { position: {x: 0, y: 1}, id: 5, type: CityFieldType.ENERGY, modifier: -1 },
        { position: {x: 1, y: 1}, id: 6, type: CityFieldType.ROBOT, modifier: -1, energy: -1 },
        { position: {x: 2, y: 1}, id: 7, type: CityFieldType.SHOOT, modifier: -1, energy: -1 },
        { position: {x: 3, y: 1}, id: 8, type: CityFieldType.EMPTY },
        { position: {x: 4, y: 1}, id: 9, type: CityFieldType.RESEARCH, modifier: -1, energy: -1 },

        { position: {x: 4, y: 2}, id: 10, type: CityFieldType.EMPTY, excavatorStart: true },
        { position: {x: 3, y: 2}, id: 11, type: CityFieldType.SHOOT, energy: -2 },
        { position: {x: 2, y: 2}, id: 12, type: CityFieldType.ENERGY, connectedWith: [13] },
        { position: {x: 1, y: 2}, id: 13, type: CityFieldType.ENERGY, connectedWith: [12] },
        { position: {x: 0, y: 2}, id: 14, type: CityFieldType.RESEARCH, energy: -1 }
    ]
};

export const EasyCityLower: CityCard = {
    name: 'Easy City Lower',
    fields: [
        { position: {x: 0, y: 3}, id: 15, type: CityFieldType.ROBOT, energy: -2 },
        { position: {x: 1, y: 3}, id: 16, type: CityFieldType.SHOOT, modifier: 1, energy: -2 },
        { position: {x: 2, y: 3}, id: 17, type: CityFieldType.RESEARCH, energy: -1, connectedWith: [18] },
        { position: {x: 3, y: 3}, id: 18, type: CityFieldType.RESEARCH, energy: -1, connectedWith: [17] },
        { position: {x: 4, y: 3}, id: 19, type: CityFieldType.ENERGY },

        { position: {x: 4, y: 4}, id: 20, type: CityFieldType.SHOOT, energy: -1 },
        { position: {x: 3, y: 4}, id: 21, type: CityFieldType.ROBOT, energy: -1 },
        { position: {x: 2, y: 4}, id: 22, type: CityFieldType.EMPTY },
        { position: {x: 1, y: 4}, id: 23, type: CityFieldType.SHOOT, modifier: -3, connectedWith: [24] },
        { position: {x: 0, y: 4}, id: 24, type: CityFieldType.ENERGY, modifier: -3, connectedWith: [23] },

        { position: {x: 0, y: 5}, id: 25, type: CityFieldType.EMPTY },
        { position: {x: 1, y: 5}, id: 26, type: CityFieldType.RESEARCH, energy: -1, connectedWith: [27, 28] },
        { position: {x: 2, y: 5}, id: 27, type: CityFieldType.RESEARCH, energy: -1, connectedWith: [26, 28] },
        { position: {x: 3, y: 5}, id: 28, type: CityFieldType.RESEARCH, energy: -1, connectedWith: [26, 27] },
        { position: {x: 4, y: 5}, id: 29, type: CityFieldType.EMPTY }
    ]
};