export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617471adc0a89f1d5be4c715',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y7i3ajsk',
                  apiId: '9af48431-0fe7-4ea7-ac3a-c01331439fc3'
                },
                {
                  buildHookId: '617471ad3dbcaf5cb87cae75',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2rsygfzr',
                  apiId: 'ad38607d-4f20-49f0-a88d-51c7bc0c2ed8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonzfisher/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2rsygfzr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
