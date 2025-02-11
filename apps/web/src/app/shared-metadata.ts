import type { Metadata } from "next";

export const TITLE = "Steadfast";
export const DESCRIPTION =
  "Enterprise-grade synthetic monitoring platform for modern businesses. Monitor your websites and APIs from 35 global regions, with advanced status pages, team collaboration, and comprehensive alerting features.";

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${TITLE}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://steadfast.dev"), // This URL should be updated to your actual domain
};

export const twitterMetadata: Metadata["twitter"] = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: ["/api/og"],
};

export const ogMetadata: Metadata["openGraph"] = {
  title: TITLE,
  description: DESCRIPTION,
  type: "website",
  images: ["/api/og"],
};
