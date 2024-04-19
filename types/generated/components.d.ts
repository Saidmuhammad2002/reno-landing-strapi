import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAuthor extends Schema.Component {
  collectionName: 'components_shared_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    full_name: Attribute.String & Attribute.Required;
    avatarImg: Attribute.Media;
  };
}

export interface SharedBlogTags extends Schema.Component {
  collectionName: 'components_shared_blog_tags';
  info: {
    displayName: 'blogTags';
  };
  attributes: {
    tag_name: Attribute.String;
  };
}

export interface SharedGuideToc extends Schema.Component {
  collectionName: 'components_shared_guide_tocs';
  info: {
    displayName: 'guideToc';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedTwitterApp extends Schema.Component {
  collectionName: 'components_shared_twitter_apps';
  info: {
    displayName: 'twitterAppCard';
    description: '';
  };
  attributes: {
    twitter_app_id_iphone: Attribute.String;
    twitter_app_id_ipad: Attribute.String & Attribute.Required;
    twitter_app_id_googleplay: Attribute.String & Attribute.Required;
    twitter_app_url_iphone: Attribute.String & Attribute.Required;
    twitter_app_url_ipad: Attribute.String;
    twitter_app_country: Attribute.String;
    twitter_app_url_googleplay: Attribute.String;
    twitter_app_name_googleplay: Attribute.String;
    twitter_app_name_phone: Attribute.String;
    twitter_app_name_ipad: Attribute.String;
    twitter_card: Attribute.Enumeration<['app']> &
      Attribute.Required &
      Attribute.DefaultTo<'app'>;
  };
}

export interface SharedTwitterPlayerCard extends Schema.Component {
  collectionName: 'components_shared_twitter_player_cards';
  info: {
    displayName: 'twitterPlayerCard';
    description: '';
  };
  attributes: {
    twitter_card: Attribute.Enumeration<['player']> &
      Attribute.Required &
      Attribute.DefaultTo<'player'>;
    twitter_title: Attribute.String & Attribute.Required;
    twitter_site: Attribute.String & Attribute.Required;
    twitter_description: Attribute.String;
    twitter_player: Attribute.String & Attribute.Required;
    twitter_player_width: Attribute.Integer & Attribute.Required;
    twitter_player_height: Attribute.Integer & Attribute.Required;
    twitter_image_alt: Attribute.String;
    twitter_image: Attribute.Media & Attribute.Required;
    twitter_player_stream: Attribute.String;
  };
}

export interface SharedTwitterSocial extends Schema.Component {
  collectionName: 'components_shared_twitter_socials';
  info: {
    displayName: 'twitterSummaryLargeImage';
    description: '';
  };
  attributes: {
    twitter_card: Attribute.Enumeration<['summary_large_image']> &
      Attribute.Required &
      Attribute.DefaultTo<'summary_large_image'>;
    twitter_site: Attribute.String;
    twitter_image: Attribute.Media;
    twitter_title: Attribute.String & Attribute.Required;
    twitter_description: Attribute.Text;
    twitter_image_alt: Attribute.String;
    twitter_creator: Attribute.String;
  };
}

export interface SharedTwitterSummaryCard extends Schema.Component {
  collectionName: 'components_shared_twitter_summary_cards';
  info: {
    displayName: 'twitterSummaryCard';
  };
  attributes: {
    twitter_card: Attribute.Enumeration<['summary']> &
      Attribute.Required &
      Attribute.DefaultTo<'summary'>;
    twitter_site: Attribute.String;
    twitter_title: Attribute.String & Attribute.Required;
    twitter_description: Attribute.Text;
    twitter_image: Attribute.Media;
    twitter_image_alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.author': SharedAuthor;
      'shared.blog-tags': SharedBlogTags;
      'shared.guide-toc': SharedGuideToc;
      'shared.seo': SharedSeo;
      'shared.twitter-app': SharedTwitterApp;
      'shared.twitter-player-card': SharedTwitterPlayerCard;
      'shared.twitter-social': SharedTwitterSocial;
      'shared.twitter-summary-card': SharedTwitterSummaryCard;
    }
  }
}
