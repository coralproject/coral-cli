import { Command, flags } from "@coralproject/coral-cli-command";
import color from "@heroku-cli/color";
import { cli } from "cli-ux";
import { uniq } from "lodash";

import { GetStoryQuery } from "./get";

export const MergeStoriesMutation = /* GraphQL */ `
  mutation MergeStories($sourceIDs: [ID!]!, $destinationID: ID!) {
    mergeStories(
      input: {
        sourceIDs: $sourceIDs
        destinationID: $destinationID
        clientMutationId: ""
      }
    ) {
      story {
        id
      }
    }
  }
`;

export default class StoryMerge extends Command {
  public static description =
    "merge stories and their comments into a single story";

  public static flags = {
    domain: flags.domain({ required: true }),
    from: flags.string({
      required: true,
      multiple: true,
      description: "source Story ID that will be merged from",
    }),
    into: flags.string({
      required: true,
      description: "destination Story ID that will be merged into",
    }),
  };

  public async run() {
    const { flags } = this.parse(StoryMerge);

    const client = this.coral(flags.domain);

    const sourceIDs: string[] = flags.from;
    const destinationID: string = flags.into;

    const storyIDs = [destinationID, ...sourceIDs];
    if (uniq(storyIDs).length !== storyIDs.length) {
      this.error("Cannot merge from/to the same story ID");
    }

    const stories = await Promise.all(
      storyIDs.map((id) => client.graphql(GetStoryQuery, { id }))
    );

    const missing = stories.reduce((ids, { data: { story } }, idx) => {
      if (story === null) {
        ids.push(storyIDs[idx]);
      }

      return ids;
    }, [] as string[]);
    if (missing.length > 0) {
      this.error(`Could not find stories with IDs: ${missing.join(", ")}`);
    }

    const confirm = await cli.confirm(
      `Do you want to merge stories with ID's ${color.yellow(
        sourceIDs.join(", ")
      )} into ${color.yellow(destinationID)}?`
    );
    if (!confirm) {
      return;
    }

    cli.action.start("Merging stories");

    await client.graphql(MergeStoriesMutation, {
      sourceIDs,
      destinationID,
    });

    cli.action.stop();
  }
}
