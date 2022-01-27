import { list } from '@keystone-6/core';
import { checkbox, image, password, relationship, text, timestamp } from '@keystone-6/core/fields';

export const lists = {
  Post: list({
    fields: {
      title: text({
        isRequired: true,
      }),
      summary: text(),
      slug: text({
        isRequired: true,
      }),
      content: text({
        ui: {
          displayMode: 'textarea',
        },
        isRequired: true,
      }),
      isHighlighted: checkbox(),
      postDate: timestamp({
        isRequired: true,
      }),
      imageSource: relationship({
        ref: 'Image',
      }),
    }
  }),
  Image: list({
    fields: {
      title: text({
        isRequired: true,
      }),
      imageSource: image({
        isRequired: true,
      }),
    },
  }),
  Person: list({
    fields: {
      name: text({
        isRequired: true
      }),
      // Added an email and password pair to be used with authentication
      // The email address is going to be used as the identity field, so it's
      // important that we set both isRequired and isUnique
      email: text({
        isRequired: true,
        isIndexed: 'unique',
      }),
      // The password field stores a hash of the supplied password, and
      // we want to ensure that all people have a password set, so we use
      // the isRequired flag.
      password: password({
        isRequired: true,
      }),
    },
  }),
};
