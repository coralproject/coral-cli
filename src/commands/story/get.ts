import { Command, flags } from "@coralproject/coral-cli-command";

export const GetStoryQuery = /* GraphQL */ `
  query GetStoryQuery($id: ID, $url: String) {
    story(id: $id, url: $url) {
      id
      url
      status
      metadata {
        title
      }
      commentCounts {
        totalPublished
      }
    }
  }
`;

export default class StoryGet extends Command {
  public static description = "fetches a story";

  public static flags = {
    domain: flags.domain({ required: true }),
    id: flags.string({
      exclusive: ["url"],
      description: "find a story by ID",
    }),
    url: flags.string({
      exclusive: ["id"],
      description: "find a story by URL",
    }),
  };

  public async run() {
    const {
      flags: { domain, id, url },
    } = this.parse(StoryGet);

    const {
      data: { story },
    } = await this.coral(domain).graphql(GetStoryQuery, {
      id,
      url,
    });

    this.log(JSON.stringify(story, null, 2));
  }
}
