import { Command, flags } from "@coralproject/coral-cli-command";
import ux from "cli-ux";

export default class Logout extends Command {
  public static description = "removes credentials for logging in with Coral";

  public static flags = {
    domain: flags.domain({ required: true })
  };

  public async run() {
    const { flags } = this.parse(Logout);

    ux.action.start("Logging out");
    await this.coral(flags.domain).auth.logout();
    ux.action.stop();
  }
}
