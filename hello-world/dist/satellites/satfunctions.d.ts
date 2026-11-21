import { SpacePacket } from "./spacePacket";
type position = {
    x: number;
    y: number;
    z: number;
};
type rotation = {
    x: number;
    y: number;
    z: number;
};
type battery = {
    id: number;
    voltage: number;
};
export declare class SatFunctions {
    satPosition: position;
    satRotation: rotation;
    battery1: battery;
    battery2: battery;
    receivePacket(packet: SpacePacket): void;
    caesarEncrypt(payload: string | SpacePacket, shift: number): string;
    caesarDecrypt(payload: string | SpacePacket, shift: number): string;
    private receiveCommand;
    private sendTelemetry;
    private getStatus;
    private getStats;
}
export {};
//# sourceMappingURL=satfunctions.d.ts.map