import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useIPFS(ipfsLink: string) {
  //https://bafyreiape6bxdy4fqfwqe6stxzlkqgc7ydqt4pfcll6ssmnytcma6n6pqe.ipfs.dweb.link/metadata.json

  const isIPFSLink = ipfsLink.startsWith("ipfs://");
  const [hash, path] = ipfsLink.substring(7).split('/');
  const gatewayLink = `https://${hash}.ipfs.dweb.link/${path}`;
  const { data, error } = useSWR(isIPFSLink ? gatewayLink : null, fetcher);


  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
