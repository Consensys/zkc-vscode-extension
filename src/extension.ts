// Copyright Consensys Software Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
// an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  State,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
  const serverOptions: ServerOptions = {
    command: "zkc",
    args: ["lsp", "-v"],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "zkc" }],
  };

  client = new LanguageClient("zkc", "ZkC", serverOptions, clientOptions);
  // log client starting.
  client.onDidChangeState((event) => {
    if (event.newState === State.Running) {
      client.info("Language server started.");
    }
  });
  // start client
  client.start();
  // register restart command
  context.subscriptions.push(
    vscode.commands.registerCommand("zkc.restartServer", async () => {
      await client.restart();
    })
  );
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
