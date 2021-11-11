// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomPreset, generateSvg } from "../../controllers/artGenerator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const r = (Math.random() + 1).toString(36).substring(2);
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(generateSvg(randomPreset(`${r}`), false));
}
