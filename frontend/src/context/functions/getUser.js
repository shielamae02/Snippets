import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { getUSerKey } from "src/context/Blog";

export async function getUser (program, walletKey) {
    const userAccount = getUserKey(walletKey);

    try {
        const _user = await program.account.userState.fetch(userAccount.publicKey);

        const user = {
            id : userAccount.publicKey.ToString(),
            name: _user.name,
            avatar: _user.avatar,
        };

        return user;
    } catch {}
}