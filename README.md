# ZkC VS Code Extension

VS Code language support for [ZkC](https://github.com/Consensys/zkc).

## Installation

This extension is not yet available on the VS Code Marketplace. It can be installed manually using the `.vsix` files attached to each [GitHub release](https://github.com/Consensys/zkc-vscode-extension/releases).

### Prerequisites

This extension requires `zkc` to be installed and available on your `PATH` (i.e. because `zkc` provides the [language server protocol (LSP)](https://en.wikipedia.org/wiki/Language_Server_Protocol) implementation). Install it with:

```bash
go install github.com/consensys/go-corset/cmd/zkc@latest
```

### Manual Installation

1. Download the `.vsix` file from the [latest release](https://github.com/Consensys/zkc-vscode-extension/releases/latest).
2. Open VS Code.
3. Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
4. Click the `...` menu (top-right of the Extensions panel) and select **Install from VSIX...**.
5. Select the downloaded `.vsix` file and click **Install**.

Alternatively, install from the command line:

```bash
code --install-extension zkc-vscode-<version>.vsix
```

## License

[Apache 2.0](LICENSE)
