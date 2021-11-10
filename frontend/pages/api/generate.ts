// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const r = (Math.random() + 1).toString(36).substring(2);
  res.redirect(`/api/generate/${r}`)
}
