import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { TrueNews } from "../target/types/true_news";

describe("true_news", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.TrueNews as Program<TrueNews>;

  it("can publish a new news", async () => {
    const newsKeyPair = anchor.web3.Keypair.generate();
    await program.methods
      .publishNews("sanjeet channel news", "my first news")
      .accounts({
        myNews: newsKeyPair.publicKey,
        publisherOfNews: program.provider.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([newsKeyPair])
      .rpc();

    const newsAccount = await program.account.news.fetch(newsKeyPair.publicKey);
    console.log(newsAccount);
  });
});
