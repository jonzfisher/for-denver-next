export default {
  name: 'linkedImage',
  title: 'Linked Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Url',
      name: 'linkUrl',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
