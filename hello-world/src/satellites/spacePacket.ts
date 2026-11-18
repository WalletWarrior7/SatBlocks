// This class defines the elements of a CCSDS Space Packet
// The types, bits, and data are all simplified for ease of use
// This is purely meant to emulate the process of building
// and sending a SpacePacket without constraints

// Secondary header omitted
export type SpacePacket =
{
    priHeader : PrimaryHeader,
    data : DataField
};

type PrimaryHeader =
{
    version : number,
    isTelecommand : boolean,
    // Ommitted for simplicity currently
    // May be included in future versions
    // apid : number,
    sequenceCount : number
    // Omitted for simplicity
    // dataLength : number
};

type DataField =
{
    isEncrypted : boolean,
    payload : string
};