// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomPreset, generateSvg } from "../../../artGenerator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { seed } = req.query;
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(generateSvg(randomPreset(`${seed}`), false));
}
