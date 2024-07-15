import express from "express";
import authMiddleware from "./middleware.js";
import Account from "../schema/db.js";
import mongoose from "mongoose";

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const session = new mongoose.startSession();

  session.startTranscation();

  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTranscation();
    return res.status(400).json({
      message: "Invalid account / Insufficent funds",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTranscation();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  //now transferring the funds from user1 to user2
  //inc user 2 && dec user 1 (balance)

  await Account.updateOne(
    {
      userId: req.userId,
    },

    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);

  await session.commitTransaction()

  res.json({
    messaage: "Trasaction Successful"
  })
});

export default accountRouter;
