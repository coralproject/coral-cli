@coralproject/coral-cli
=======================

CLI to interact with Coral

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![CircleCI](https://circleci.com/gh/coralproject/coral-cli/tree/master.svg?style=shield)](https://circleci.com/gh/coralproject/coral-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![License](https://img.shields.io/npm/l/@coralproject/coral-cli.svg)](https://github.com/coralproject/coral-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @coralproject/coral-cli
$ coral-cli COMMAND
running command...
$ coral-cli (-v|--version|version)
@coralproject/coral-cli/1.0.0 darwin-x64 node-v10.15.3
$ coral-cli --help [COMMAND]
USAGE
  $ coral-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`coral-cli hello [FILE]`](#coral-cli-hello-file)
* [`coral-cli help [COMMAND]`](#coral-cli-help-command)

## `coral-cli hello [FILE]`

describe the command here

```
USAGE
  $ coral-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ coral-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/coralproject/coral-cli/blob/v1.0.0/src/commands/hello.ts)_

## `coral-cli help [COMMAND]`

display help for coral-cli

```
USAGE
  $ coral-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
