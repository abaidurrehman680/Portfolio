import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Web3Forms must be called from the browser (free plan). Expose key to the client.
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY:
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
      process.env.WEB3FORMS_ACCESS_KEY ??
      "",
  },
};

export default nextConfig;
