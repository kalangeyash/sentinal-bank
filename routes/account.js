import express from "express";
import authMiddleware from "./middleware.js";
import Account from "../schema/db.js";
import mongoose from "mongoose";

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const user = req.userId
  console.log("req id in user  "+user)

  const accounts = await Account.findOne({
    userId: user,
  });
  console.log("the accounts is " + accounts)

  try{
    res.status(200).json({
      balance: accounts.balance
    });
  }catch(err)
  {
    res.status(400).json({
      messgae : "error in balances"
    })
  }
    
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const session =  new mongoose.startSession();

   await session.startTransaction();

  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);
|| account.balance < amount) {
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
