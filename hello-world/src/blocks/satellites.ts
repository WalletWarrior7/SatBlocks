import * as Blockly from 'blockly/core';

Blockly.Blocks['send_command'] = {
    init: function() {
        this.appendStatementInput('COMMAND')
        .setCheck('String')
        .appendField('Send Command');
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(225);
    }
}