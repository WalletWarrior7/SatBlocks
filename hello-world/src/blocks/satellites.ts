import * as Blockly from 'blockly/core';

export const blocks = {
    
    /*
    'send_command': {
        init: function (this: Blockly.Block) {
            this.appendValueInput('COMMAND')
            .setCheck('String')
            .appendField('Send Command');
            this.setOutput(true, 'String');
            this.setInputsInline(true);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(225);
        }
    },

    'request_telemetry': {
        init: function (this: Blockly.Block) {
            this.appendValueInput('TELEMETRY')
            .setCheck('String')
            .appendField('Request Telemetry');
            this.setOutput(true, 'String');
            this.setInputsInline(true);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(225);
        }
    },
    */

    'encrypt_payload': {
        init: function (this: Blockly.Block) {
            this.appendDummyInput('PAYLOAD')
            .appendField('Encrypt Payload')
            this.setOutput(true, 'String');
            this.setInputsInline(true);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(180);
        }
    },

    'get_status': {
        init: function (this: Blockly.Block) {
            this.appendValueInput('PAYLOAD')
            .setCheck('String')
            .appendField('Get Status');
            this.setOutput(true, null);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(225);
        }
    },

    'set_data': {
        init: function (this: Blockly.Block) {
            this.appendDummyInput('DATA')
            .appendField('Set Data')
            .appendField(new Blockly.FieldTextInput('Enter Data'), 'DATA');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(15);
        }
    },
}