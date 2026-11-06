import * as Blockly from 'blockly/core';

export const blocks = {
    'send_command': {
        init: function (this: Blockly.Block) {
            this.appendStatementInput('COMMAND')
            .setCheck('String')
            .appendField('Send Command');
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setHelpUrl('');
            this.setColour(225);
        }
    }
}