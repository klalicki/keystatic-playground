import { config, fields, collection } from "@keystatic/core";
import * as customFields from "./fields";
export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        accentColor: customFields.colorPicker({
          label: "Accent Color",
          defaultValue: "#000000",
        }),
        myUrl: fields.url({
          label: "My URL",
          validation: {},
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/",
            },
          },
        }),
      },
    }),
  },
});
