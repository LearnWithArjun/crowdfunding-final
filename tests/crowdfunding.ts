import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Crowdfunding } from "../target/types/crowdfunding";

describe("crowdfunding", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Crowdfunding as Program<Crowdfunding>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
