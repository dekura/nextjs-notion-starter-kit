import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3285b78df16d455892c0cf627a7dc429',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '3c63fcef-1a41-4de7-b34c-d15216a50609',

  // basic site info (required)
  name: 'JoyG | Web3',
  domain: 'joyg.fun',
  author: 'JoyG Chen',

  // open graph metadata (optional)
  description: 'JoyG | Web3 homepage',

  // social usernames (optional)
  twitter: 'dekura11',
  github: 'dekura',
  linkedin: 'dekura',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '3d33d27fac1d4d75bc495d6779eb1a09'
    // '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '3285b78df16d455892c0cf627a7dc429'
    },
    {
      title: 'About',
      pageId: '3d33d27fac1d4d75bc495d6779eb1a09'
    }
  ]
})
