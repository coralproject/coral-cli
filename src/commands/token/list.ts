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
    domain: flags.domain({ required: true }),
    json: flags.boolean({ description: "will write output as json" }),
  };

  public async run() {
    const {
      flags: { domain, json },
    } = this.parse(TokenList);

    const {
      data: { viewer },
    } = await this.coral(domain).graphql(ListTokenQuery);

    if (json) {
      console.log(JSON.stringify(viewer.tokens, null, 2));
    } else {
      cli.table(viewer.tokens, {
        id: {
          header: "ID",
        },
        name: {
          header: "Name",
        },
        createdAt: {
          header: "Created At",
        },
      });
    }
  }
}
