

export function sendCommand(command : string) 
{
    switch (command) {
        case "getStatus":
            console.log('Sent a status check');
            return getStatus();
        default:
            return "Command error";
    }
}

function getStatus()
{
    return "Status Ok";
}