export type SpacePacket = {
    priHeader: PrimaryHeader;
    data: DataField;
};
type PrimaryHeader = {
    version: number;
    isTelecommand: boolean;
    sequenceCount: number;
};
type DataField = {
    isEncrypted: boolean;
    payload: string;
};
export {};
//# sourceMappingURL=spacePacket.d.ts.map