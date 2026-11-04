import * as Blockly from 'blockly';
import {pythonGenerator, Order} from 'blockly/python';

pythonGenerator.forBlock['send_command'] = function(block, generator) {
  const statement_command = generator.statementToCode(block, 'COMMAND');

  // TODO: Assemble python into the code variable.
  const code = '...';
  return code;
}