import {NextApiRequest} from "next";
import {writeFile} from "node:fs/promises";
import {NextResponse} from "next/server";
import {v4} from "uuid";
import path from "node:path";

export const config = { api: { bodyParser: false } };

const basePath = path.join(
  "public",
  "uploads",
);

export async function POST(req: NextApiRequest) {
  const buffer = await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });

  const filename = v4();
  await writeFile(`${basePath}/${filename}`, buffer);

  NextResponse.json({ success: true, imageUrl: `/uploads/${filename}` })
}
