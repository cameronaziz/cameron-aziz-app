import { list } from '@keystone-6/core';
import { checkbox, relationship, text, timestamp } from '@keystone-6/core/fields';

const Post = list({
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    summary: text(),
    slug: text({
      validation: {
        isRequired: true,
      },
    }),
    content: text({
      ui: {
        displayMode: 'textarea',
      },
      validation: {
        isRequired: true,
      },
    }),
    isHighlighted: checkbox(),
    postDate: timestamp({
      validation: {
        isRequired: true,
      },
    }),
    imageSource: relationship({
      ref: 'Image',
    }),
  }
});

export default Post;
