import { Command, flags } from "@coralproject/coral-cli-command";
import color from "@heroku-cli/color";
import { cli } from "cli-ux";

export const GetStoryQuery = /* GraphQL */ `
  query GetStoryQuery($id: ID) {
    story(id: $id) {
      id
      url
    }
  }
`;

export const UpdateStoryMutation = /* GraphQL */ `
  mutation UpdateStoryMutation($id: ID!, $story: UpdateStory!) {
    updateStory(input: { id: $id, story: $story, clientMutationId: "" }) {
      story {
        id
        url
      }
    }
  }
`;

export default class StoryUpdate extends Command {
  public static description = "update stories metadata";

  public static flags = {
    domain: flags.domain({ required: true }),
    id: flags.string({
      required: true,
      description: "the ID of the story to update",
    }),
    url: flags.string({
      required: true,
      description: "the new URL to update the story to",
    }),
  };

  public async run() {
    const {
      flags: { domain, id, url },
    } = this.parse(StoryUpdate);

    const {
      data: { story },
    } = await this.coral(domain).graphql(GetStoryQuery, {
      id,
    });
    if (!story) {
      this.error(`Story with ID ${color.yellow(id)} not found`);
    }

    if (story.url === url) {
      this.error("URL is the same");
    }

    const confirm = await cli.confirm(
      `Update Story ${color.yellow(id)} URL from ${color.red(
        story.url
      )} to ${color.green(url)}?`
    );
    if (!confirm) {
      return;
    }

    cli.action.start("Updating Story");

    await this.coral(domain).graphql(UpdateStoryMutation, {
      id,
      story: { url },
    });

    cli.action.stop();
  }
}
