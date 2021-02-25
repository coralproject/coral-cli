# @coralproject/coral-cli

CLI to interact with Coral

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![CircleCI](https://circleci.com/gh/coralproject/coral-cli/tree/main.svg?style=shield)](https://circleci.com/gh/coralproject/coral-cli/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![License](https://img.shields.io/npm/l/@coralproject/coral-cli.svg)](https://github.com/coralproject/coral-cli/blob/main/package.json)

<!-- toc -->
* [@coralproject/coral-cli](#coralprojectcoral-cli)
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
@coralproject/coral-cli/0.5.0 darwin-x64 node-v12.20.1
$ coral-cli --help [COMMAND]
USAGE
  $ coral-cli COMMAND
...
```
<!-- usagestop -->

All commands require the `domain` where your instance of Coral is installed. When specifying the domain any trailing `/` characters should be removed. For example, if your domain ends in `.com`, you will see an error if you include a trailing slash i.e.: `.com/`


# Commands

<!-- commands -->
* [`coral-cli help [COMMAND]`](#coral-cli-help-command)
* [`coral-cli login`](#coral-cli-login)
* [`coral-cli logout`](#coral-cli-logout)
* [`coral-cli plugins`](#coral-cli-plugins)
* [`coral-cli plugins:install PLUGIN...`](#coral-cli-pluginsinstall-plugin)
* [`coral-cli plugins:link PLUGIN`](#coral-cli-pluginslink-plugin)
* [`coral-cli plugins:uninstall PLUGIN...`](#coral-cli-pluginsuninstall-plugin)
* [`coral-cli plugins:update`](#coral-cli-pluginsupdate)
* [`coral-cli scraper:debug`](#coral-cli-scraperdebug)
* [`coral-cli story:get`](#coral-cli-storyget)
* [`coral-cli story:merge`](#coral-cli-storymerge)
* [`coral-cli story:update`](#coral-cli-storyupdate)
* [`coral-cli token:create`](#coral-cli-tokencreate)
* [`coral-cli token:list`](#coral-cli-tokenlist)
* [`coral-cli token:revoke`](#coral-cli-tokenrevoke)

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `coral-cli login`

grabs a token for interacting with Coral

```
USAGE
  $ coral-cli login

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
```

_See code: [src/commands/login.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/login.ts)_

## `coral-cli logout`

removes credentials for logging in with Coral

```
USAGE
  $ coral-cli logout

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
```

_See code: [src/commands/logout.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/logout.ts)_

## `coral-cli plugins`

list installed plugins

```
USAGE
  $ coral-cli plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ coral-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/index.ts)_

## `coral-cli plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ coral-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ coral-cli plugins:add

EXAMPLES
  $ coral-cli plugins:install myplugin 
  $ coral-cli plugins:install https://github.com/someuser/someplugin
  $ coral-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/install.ts)_

## `coral-cli plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ coral-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ coral-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/link.ts)_

## `coral-cli plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ coral-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ coral-cli plugins:unlink
  $ coral-cli plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/uninstall.ts)_

## `coral-cli plugins:update`

update installed plugins

```
USAGE
  $ coral-cli plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/update.ts)_

## `coral-cli scraper:debug`

displays the metadata that Coral was able to scrape from the given URL

```
USAGE
  $ coral-cli scraper:debug

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --url=url            (required)
```

_See code: [src/commands/scraper/debug.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/scraper/debug.ts)_

## `coral-cli story:get`

fetches a story

```
USAGE
  $ coral-cli story:get

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --id=id              find a story by ID
  --url=url            find a story by URL
```

_See code: [src/commands/story/get.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/story/get.ts)_

## `coral-cli story:merge`

merge stories and their comments into a single story

```
USAGE
  $ coral-cli story:merge

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --from=from          (required) source Story ID that will be merged from
  --into=into          (required) destination Story ID that will be merged into
```

_See code: [src/commands/story/merge.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/story/merge.ts)_

## `coral-cli story:update`

update stories metadata

```
USAGE
  $ coral-cli story:update

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --id=id              (required) the ID of the story to update
  --url=url            (required) the new URL to update the story to
```

_See code: [src/commands/story/update.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/story/update.ts)_

## `coral-cli token:create`

creates tokens on the current user

```
USAGE
  $ coral-cli token:create

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --json               will write output as json
  --name=name          (required) name of the token
```

_See code: [src/commands/token/create.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/token/create.ts)_

## `coral-cli token:list`

lists tokens on the current user

```
USAGE
  $ coral-cli token:list

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --json               will write output as json
```

_See code: [src/commands/token/list.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/token/list.ts)_

## `coral-cli token:revoke`

revokes tokens on the current user

```
USAGE
  $ coral-cli token:revoke

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --id=id              (required) id of the token to revoke
```

_See code: [src/commands/token/revoke.ts](https://github.com/coralproject/coral-cli/blob/v0.5.0/src/commands/token/revoke.ts)_
<!-- commandsstop -->
