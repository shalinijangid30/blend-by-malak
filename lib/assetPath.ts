// next/image renders a plain <img> when `unoptimized: true` (required for
// static export) and does not auto-prepend `basePath` to local src paths in
// that mode, unlike normal Next.js image optimization. Use this wherever a
// /public asset path is passed directly to <Image src="..."> or <img src="...">.
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
