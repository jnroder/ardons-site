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
      'components.feature-items': ComponentsFeatureItems;
    }
  }
}
