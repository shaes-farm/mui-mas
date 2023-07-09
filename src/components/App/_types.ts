export interface AppConfig {
  title: string;
  description: string;
  icon: string;
  logo: {
    main: string;
    contrast?: string;
  }
  copyright: {
    holder: string;
    year: number;
    url: string;
  }
  pages: {
    home: string;
    signin: string;
    signup: string;
    recovery: string;
  }
}
