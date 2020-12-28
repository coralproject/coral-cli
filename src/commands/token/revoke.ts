import { Command, flags } from "@coralproject/coral-cli-command";

export const DeactivateTokenMutation = /* GraphQL */ `
  mutation DeactivateTokenMutation($id: ID!) {
    deactivateToken(input: { clientMutationId: "", id: $id }) {
      token {
        id
        name
        createdAt
      }
    }
  }
`;

export default class TokenRevoke extends Command {
  public static description = "revokes tokens on the current user";

  public static flags = {
    domain: flags.domain({ required: true }),
    id: flags.string({
      required: true,
      description: "id of the token to revoke",
    }),
  };

  public async run() {
    const {
      flags: { domain, id },
    } = this.parse(TokenRevoke);

    const {
      data: {
        deactivateToken: { token },
      },
    } = await this.coral(domain).graphql(DeactivateTokenMutation, {
      id,
    });

    this.log(`Revoked Token ${token.id}`);
  }
}
