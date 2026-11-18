import { SpacePacket } from "./spacePacket";

// Use to test altitude, pos, rotation functions
type position = {
    x : number,
    y : number,
    z : number
};

type rotation = {
    x : number,
    y : number,
    z : number
};

type battery = {
    id : number,
    voltage : number
};

type satStats = {
    pos : position,
    rot : rotation,
    bat1 : battery,
    bat2 : battery
};

export class SatFunctions {
    satPosition : position = {x : 0, y : 0, z : 0};
    satRotation : rotation = {x : 0, y : 0, z : 0};
    battery1 : battery = {id : 1, voltage : 28.5};
    battery2 : battery = {id : 2, voltage : 43.7};
    
    public receivePacket(packet : SpacePacket) {
        const isTelecommand = packet.priHeader.isTelecommand;
        const payload = packet.data.isEncrypted ? 
                            this.caesarDecrypt(packet.data.payload, 7) :
                            packet.data.payload;
        
        if (isTelecommand) {
            this.receiveCommand(payload)
        }
        else {
            this.sendTelemetry(payload);
        }
    }

    public caesarEncrypt(text: string, shift: number): string {
        return caesarShift(text, shift);
    }

    public caesarDecrypt(text: string, shift: number): string {
        return caesarShift(text, -shift);
    }

    private receiveCommand(command : String) {
        switch (command) {
            case "adjustPosition":
                return console.log("Not implemented");
            case "changeVoltage":
                return console.log("Not implemented");
            default:
                console.log("Command Error")
                return "Command error";
        }
    }
    
    private sendTelemetry(telemetry : String) {
        switch (telemetry) {
            case "getStatus":
                return this.getStatus();
            case "getStats":
                return this.getStats();
            default:
                console.log("Command Error")
                return "Command error";
        }
    }

    private getStatus()
    {
        console.log('Sent a status check');
        return "Status Ok";
    }

    private getStats() : satStats
    {
        console.log("Position: " + this.satPosition) + "\n";
        console.log("Rotation: " + this.satRotation) + "\n";
        console.log("Battery 1: " + this.battery1) + "\n";
        console.log("Battery 2: " + this.battery2) + "\n";

        return {
            pos: this.satPosition,
            rot: this.satRotation,
            bat1: this.battery1,
            bat2: this.battery2,
        };
    }
}

// Simple encryption cipher
function caesarShift(text: string, shift: number): string {
  const s = ((shift % 26) + 26) % 26;

  return text.replace(/[a-z]/gi, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base);
  });
}