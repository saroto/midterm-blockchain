export default interface BlockData {
  hash: string;
  block_capacity: number;
  mined: boolean | undefined;
  nonce: number;
  transactions?: [];
  timestamp?: number;
}
[];
