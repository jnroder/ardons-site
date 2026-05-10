import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    features: Schema.Attribute.Component<'components.feature-items', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-link.social-link'
    >;
  };
}

export interface ComponentsFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_items';
  info: {
    displayName: 'FeatureItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.social-links': BlocksSocialLinks;
      'components.feature-items': ComponentsFeatureItems;
    }
  }
}
