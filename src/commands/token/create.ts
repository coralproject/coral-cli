import { Command, flags } from "@coralproject/coral-cli-command";

export const CreateTokenMutation = /* GraphQL */ `
  mutation CreateTokenMutation($name: String!) {
    createToken(input: { clientMutationId: "", name: $name }) {
      token {
        id
        name
        createdAt
      }
      signedToken
    }
  }
`;

export default class TokenCreate extends Command {
  public static description = "creates tokens on the current user";

  public static flags = {
    domain: flags.domain({ required: true }),
    name: flags.string({ required: true, description: "name of the token" })
  };

  public async run() {
    const {
      flags: { domain, name }
    } = this.parse(TokenCreate);

    const {
      data: {
        createToken: { token, signedToken }
      }
    } = await this.coral(domain).graphql(CreateTokenMutation, {
      name
    });

    this.log(`Created Token ${token.id}: ${signedToken}`);
  }
}
