// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomPreset, generateSvg } from "../../../controllers/artGenerator";
import { render } from "@resvg/resvg-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { seed } = req.query;
  res.setHeader("Content-Type", "image/png");
  res.send(render(generateSvg(randomPreset(`${seed}`), false)));
}
