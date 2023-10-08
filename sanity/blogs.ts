import { StringRule, defineField } from "sanity";

const blogs = {
    name: 'blog',
    title: 'blog',
    type: 'document',
    fields: [
     defineField( {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        description:
          "Add a custom slug for the URL or generate one from the name",
        options: { source: "name" },
        validation: (rule) => rule.required(),
      }),
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
        ],
        validation: (rule:StringRule) => rule.required(),
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'profile' }], // Reference to an Author schema (create an Author schema separately)
        validation: (rule:StringRule) => rule.required(),
      },
      
      defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'string',
       
      }),
    ],
  };

  export default blogs