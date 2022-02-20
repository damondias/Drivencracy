import { ObjectId } from 'mongodb';
import { stripHtml } from "string-strip-html";
import dayjs from "dayjs";
import db from '../database.js';

export async function postPool(req, res) {
    const pool = req.body;
    const { title, expireAt } = pool;

    try {
      if (!expireAt) {
        let currentTime = dayjs().add(30, "day").format("YYYY-MM-D hh:mm");

        const undatedPool = { title, expireAt: currentTime };
        await db.collection("pools").insertOne(undatedPool);
        return res.status(201).send(undatedPool);
      }
      
      await db.collection("pools").insertOne(pool);  
      res.status(201).send(pool);  
    }
    catch {
      res.sendStatus(500);
    }
}

export async function getPool(req, res) {

    try {
      const pools = await db.collection("pools").find().toArray();  
      res.send(pools);
    }
    catch {
      res.sendStatus(500);
    }  
}

export async function getPoolChoices(req, res) {
  const poolId = req.params.id;  

  try {
    const poolChoices = await db.collection("choices").find({ poolId: poolId }).toArray();
    if (poolChoices.length === 0) {
      return res.status(404).send("Enquete não existe");
    }
    return res.status(200).send(poolChoices);
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}