/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {javascriptGenerator, Order} from 'blockly/javascript';
import * as Blockly from 'blockly/core';
import { SpacePacket } from "../satellites/spacePacket";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block: Blockly.Block, generator: Blockly.CodeGenerator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  return `addText(${text});\n`;
};
/*
// Sends a command to the satellite
javascriptGenerator.forBlock['send_command'] = function(block, generator) {
  const command = generator.valueToCode(block, 'COMMAND', Order.NONE);

  const code = `sendCommand(${command})`;
  return [code, Order.FUNCTION_CALL];
}

// Requests telemetry data from the satellite
javascriptGenerator.forBlock['request_telemetry'] = function(block, generator) {
  const telemetry = generator.valueToCode(block, 'TELEMETRY', Order.NONE);

  const code = `requestTelemetry(${telemetry})`;
  return [code, Order.FUNCTION_CALL];
}
*/

// Used to encrypt a space packet's payload
javascriptGenerator.forBlock['encrypt_payload'] = function(block, generator) {
  const payload = generator.valueToCode(block, 'PAYLOAD', Order.NONE);

  const code = `caesarEncrypt(${payload}, 7)`;
  return [code, Order.FUNCTION_CALL];
}

// Assembles the packet for the telemetry get status and sends it
javascriptGenerator.forBlock['get_status'] = function(block, generator) {
  // Get the input type to see if payload should be encrypted
  const target = block.getInputTargetBlock('PAYLOAD');
  const packet : SpacePacket = {
    priHeader : {version : 0, isTelecommand : false, sequenceCount : 0},
    data : { isEncrypted : target?.type === 'encrypt_payload' ? true : false, payload : "getStatus"}
  }

  let code;
  if (packet.data.isEncrypted) {
    code = `sendPacket(caesarEncrypt(${JSON.stringify(packet)}))`;
  }
  else {
    code = `sendPacket(${JSON.stringify(packet)})`;
  }
  return [code, Order.FUNCTION_CALL];
}


/* Blocks for building a Space Packet */
//
javascriptGenerator.forBlock['set_data'] = function(block, generator) {
  const data = block.getFieldValue('DATA');

  return data;
}