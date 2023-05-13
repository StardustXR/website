
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/about',
  component: ComponentCreator('/about','383'),
  exact: true,
},
{
  path: '/roadmap',
  component: ComponentCreator('/roadmap','217'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','7b4'),
  
  routes: [
{
  path: '/docs/getting-started/install',
  component: ComponentCreator('/docs/getting-started/install','583'),
  exact: true,
},
{
  path: '/docs/getting-started/making-clients',
  component: ComponentCreator('/docs/getting-started/making-clients','779'),
  exact: true,
},
{
  path: '/docs/getting-started/overview',
  component: ComponentCreator('/docs/getting-started/overview','41a'),
  exact: true,
},
{
  path: '/docs/getting-started/starting',
  component: ComponentCreator('/docs/getting-started/starting','ea5'),
  exact: true,
},
{
  path: '/docs/getting-started/tech-overview',
  component: ComponentCreator('/docs/getting-started/tech-overview','4db'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
