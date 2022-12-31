// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomPreset, generateSvg } from "../../../controllers/artGenerator";
import { NFTStorage, File, Token } from "nft.storage";

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

  const nftStorageClient = new NFTStorage({
    token: nftStorageApiKey,
  });

  if (!seed || Array.isArray(seed)) {
    res.status(400).json({ error: "Invalid seed." });
    return;
  }

  try {
    const nftMetadata = {
      name: seed,
      description: `${seed} - RandomRadial generated on dsalib.com`,
      image: new File(
        [generateSvg(randomPreset(`${seed}`), false)],
        `${seed}.svg`,
        { type: "image/svg+xml" }
      ),
    };

    const metadata = await nftStorageClient.store(nftMetadata);

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).json({ status: "success", metadata: metadata });
  } catch (e) {
    res.status(500).send(e);
  }
}
