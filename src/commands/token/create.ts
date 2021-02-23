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
    name: flags.string({ required: true, description: "name of the token" }),
    json: flags.boolean({ description: "will write output as json" }),
  };

  public async run() {
    const {
      flags: { domain, name, json },
    } = this.parse(TokenCreate);

    const {
      data: { createToken },
    } = await this.coral(domain).graphql(CreateTokenMutation, {
      name,
    });

    if (json) {
      console.log(JSON.stringify(createToken, null, 2));
    } else {
      const { token, signedToken } = createToken;

      this.log(`Created Token ${token.id}: ${signedToken}`);
    }
  }
}
