export interface TitlePage {
  title: string;
  logoImagePath: string;
  transparentLogoImagePath: string;
  bgImagePath: string;
  fontColor: string;
  slogan: string;
  about: string;
  email: string;
  links: {
    name: string;
    link: string;
    icon: string;
  }[];
}