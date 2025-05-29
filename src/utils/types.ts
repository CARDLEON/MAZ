export type TopBar = {
  phone_top: string;
  phone_top_2: string;
  phone_top_3: string;
  email_top: string;
  schedule_top: string;
  fb_link_top: string;
  in_link_top: string;
};

export type Footer = {
  description_footer: string;
  fb_link_footer: string;
  in_link_footer: string;
  mail_footer: string;
  location_footer: string;
  email_footer: string;
  phone_footer: string;
  whatsapp_footer: string;
};

export type HeroSection = {
  title_hero_section: string;
  subtitle_hero_section: string;
  bg_hero_section: string;
  breadcrumb_hero_section: string;
};

// export type Product = {
//   product_image: string;
//   product_title: string;
//   product_description: string;
//   product_category: string;
//   product_highlights: string;
// };

export type ProductACF = {
  product_category: string;
  product_title: string;
  product_description: string;
  product_highlight: string;
  product_image?: {
    url?: string;
  };
  product_featured: boolean;
  product_featured_text: string;
  product_link: string;
};

export type Product = {
  id: number;
  slug: string;
  acf: ProductACF;
};

export type ProductPost = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
};

export type WelcomeSection = {
  img_home_welcome: string;
  label_welcome: string;
  message_welcome: string;
  submessage_welcome: string;
  cta_url: string;
};
