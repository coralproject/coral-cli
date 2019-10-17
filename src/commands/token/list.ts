import { Command, flags } from "@coralproject/coral-cli-command";
import { cli } from "cli-ux";

export const ListTokenQuery = /* GraphQL */ `
  query ListTokenQuery {
    viewer {
      tokens {
        id
        name
        createdAt
      }
    }
  }
`;

export default class TokenList extends Command {
  public static description = "lists tokens on the current user";

  public static flags = {
    domain: flags.domain({ required: true })
  };

  public async run() {
    const {
      flags: { domain }
    } = this.parse(TokenList);

    const {
      data: { viewer }
    } = await this.coral(domain).graphql(ListTokenQuery);

    cli.table(viewer.tokens, {
      id: {
        header: "ID"
      },
      name: {
        header: "Name"
      },
      createdAt: {
        header: "Created At"
      }
    });
  }
}
