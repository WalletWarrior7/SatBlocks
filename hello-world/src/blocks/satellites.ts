import * as Blockly from 'blockly/core';

export const blocks = {
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
    }
}