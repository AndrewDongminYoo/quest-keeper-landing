import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    // 한국어 우선 제품: 루트는 /ko로 영구 리다이렉트, 언어 발견은 hreflang이 담당
    { source: "/", destination: "/ko", permanent: true },
  ],
};

export default nextConfig;
