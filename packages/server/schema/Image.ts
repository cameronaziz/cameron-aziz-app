import { list } from '@keystone-6/core';
import { image, text } from '@keystone-6/core/fields';

const Image = list({
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    imageSource: image(),
  },
});

export default Image;
