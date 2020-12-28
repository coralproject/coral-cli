import { Command, flags } from "@coralproject/coral-cli-command";
import color from "@heroku-cli/color";

export const GetViewerQuery = /* GraphQL */ `
  query GetViewer {
    viewer {
      username
    }
  }
`;

export default class Login extends Command {
  public static description = "grabs a token for interacting with Coral";

  public static flags = {
    domain: flags.domain({ required: true }),
  };

  public async run() {
    const { flags } = this.parse(Login);
    const client = this.coral(flags.domain);

    await client.auth.login();

    const { data } = await client.graphql(GetViewerQuery);

    this.log(`Logged in as ${color.green(data.viewer.username)}`);
  }
}
