/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {javascriptGenerator, Order} from 'blockly/javascript';
import * as Blockly from 'blockly/core';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block: Blockly.Block, generator: Blockly.CodeGenerator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  return `addText(${text});\n`;
};

javascriptGenerator.forBlock['send_command'] = function(block, generator) {
  const statement_command = generator.statementToCode(block, 'COMMAND');
  
  const code = 'console.log("getStatus()");\n';
  return code;
}
