declare module '@/constant/config' {
  export type SiteConfig = {
    title: string;
    description: string;
    url: string;
  };

  export const siteConfig: SiteConfig;
}
