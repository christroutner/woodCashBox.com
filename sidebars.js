// @ts-check

/**
 * Sidebars organized by audience type for the Sovereignty Appliance messaging
 * For Merchants section - technical documentation
 * For Builders section - builder documentation
 * Reference section - support and design resources
 */

const sidebars = {
  // For Builders - Technical documentation (docs/intro, hardware, assembly)
  merchantsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'hardware',
      label: 'Hardware',
    },
    {
      type: 'doc',
      id: 'assembly',
      label: 'Assembly',
    },
  ],

  // For Merchants - Point of sale focus (software, support)
  builderSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'hardware',
      label: 'Hardware',
    },
    {
      type: 'doc',
      id: 'software',
      label: 'Software',
    },
  ],

  // Reference - Support and technical resources
  referenceSidebar: [
    {
      type: 'doc',
      id: 'support',
      label: 'Support',
    },
    {
      type: 'doc',
      id: 'laser-engraving',
      label: 'Laser & 3D Files',
    },
  ],
};

export default sidebars;
