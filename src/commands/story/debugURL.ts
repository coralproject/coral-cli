import { Command, flags } from "@coralproject/coral-cli-command";

export const DebugScrapeStoryMetadataQuery = /* GraphQL */ `
  query debugScraper($url: String!){
    debugScrapeStoryMetadata(url: $url){
      title
      author
      description
      publishedAt
      image
      modifiedAt
      section
    }
  }
`;

export default class StoryDebugURL extends Command {
  public static description = "displays the metadata that Coral was able to scrape from the given URL";

  public static flags = {
    domain: flags.domain({ required: true }),
    url: flags.string({ required: true }),
  };

  public async run() {
    const {
      flags: { domain, url },
    } = this.parse(StoryDebugURL);

    const {
      data: { story },
    } = await this.coral(domain).graphql(DebugScrapeStoryMetadataQuery, {
      url,
    });

    this.log(JSON.stringify(story, null, 2));
  }
}
