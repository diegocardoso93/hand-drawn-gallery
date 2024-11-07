import { PageContextServer } from "vike/types";

export type ServerPageProps = PageContextServer & {
  pageData: {},
};

export type WorldVerifiedAccount = {
  proof: string,
  merkle_root: string,
  nullifier_hash: string,
  verification_level: string,
};

export type UploadImageInputRequest = {
  title?: string,
  base64Image?: string,
  user?: WorldVerifiedAccount,
};

export type ImgbbUploadApiResponse = {
  data: {
    url: string,
  },
};

export type GeminiResponseUsed = {
  candidates: [{content: {parts: [{text: string}]}}]
};
