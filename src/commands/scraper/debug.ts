import { Command, flags } from "@coralproject/coral-cli-command";

export const DebugScrapeStoryMetadataQuery = /* GraphQL */ `
  query DebugScrapeStoryMetadataQuery($url: String!) {
    debugScrapeStoryMetadata(url: $url) {
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

export default class ScraperDebug extends Command {
  public static description =
    "displays the metadata that Coral was able to scrape from the given URL";

  public static flags = {
    domain: flags.domain({ required: true }),
    url: flags.string({ required: true }),
  };

  public async run() {
    const {
      flags: { domain, url },
    } = this.parse(ScraperDebug);

    const {
      data: { debugScrapeStoryMetadata },
    } = await this.coral(domain).graphql(DebugScrapeStoryMetadataQuery, {
      url,
    });

    this.log(JSON.stringify(debugScrapeStoryMetadata, null, 2));
  }
}
