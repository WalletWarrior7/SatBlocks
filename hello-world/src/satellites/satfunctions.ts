export class SatFunctions {
    sendCommand(command : string) 
    {
        const decryptedCommand = this.caesarDecrypt(command, 7);
        switch (decryptedCommand) {
            case "getStatus":
                console.log('Sent a status check');
                return getStatus();
            default:
                console.log("Command Error")
                return "Command error";
        }
    }

    caesarEncrypt(text: string, shift: number): string {
        return caesarShift(text, shift);
    }

    caesarDecrypt(text: string, shift: number): string {
        return caesarShift(text, -shift);
    }
}

function getStatus()
{
    return "Status Ok";
}

// Simple encryption cipher
function caesarShift(text: string, shift: number): string {
  const s = ((shift % 26) + 26) % 26;

  return text.replace(/[a-z]/gi, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base);
  });
}