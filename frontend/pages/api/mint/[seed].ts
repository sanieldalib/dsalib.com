// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  randomPreset,
  generateSvg,
  dateToString,
} from "../../../controllers/artGenerator";
import { NFTStorage, File } from "nft.storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { seed } = req.query;

  const nftStorageApiKey = process.env.NFT_STORAGE_API_KEY;

  if (!nftStorageApiKey) {
    res
      .status(400)
      .json({ error: "Cannot reach nft.storage. Try again later." });
    return;
  }

  if (Array.isArray(seed)) {
    res.status(400).json({ error: "Invalid seed." });
    return;
  }

  const today = dateToString(new Date());

  if (!seed.startsWith(today)) {
    res.status(400).json({ error: "Seed must be today to mint." });
    return;
  }

  const nftStorageClient = new NFTStorage({
    token: nftStorageApiKey,
  });

  try {
    const metadata = await nftStorageClient.store({
      name: `RandomRadial ${seed}`,
      description: `RandomRadial generated on ${today} with seed '${seed.substring(
        10
      )}' on dsalib.com`,
      image: new File(
        [generateSvg(randomPreset(`${seed}`), false)],
        `randomradial${seed}.svg`,
        { type: "image/svg+xml" }
      ),
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).json({ status: "success", metadata: metadata });
  } catch (e) {
    res.send(e);
  }
}
