import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  State,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(_context: vscode.ExtensionContext) {
  const serverOptions: ServerOptions = {
    command: "zkc",
    args: ["lsp"],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "zkc" }],
  };

  client = new LanguageClient("zkc", "ZkC", serverOptions, clientOptions);
  client.onDidChangeState((event) => {
    //if (event.newState === State.Running) {
    client.info("ZkC language server started.");
    //  }
  });
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
