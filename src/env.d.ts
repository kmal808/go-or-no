/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly HOME_ROUTE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}