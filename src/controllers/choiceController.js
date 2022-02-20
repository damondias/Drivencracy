import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import db from "../database.js"

export async function postChoice(req, res) {
    const choice = req.body;
    const { title, poolId } = choice;

    try {
      const searchId = ObjectId(poolId);      
      const currentPool = await db.collection("pools").findOne({ _id: searchId });
  
      if (!currentPool) {
        return res.status(404).send("Uma opção de voto não pode ser inserida sem uma enquete existente");
      }
  
      const poolExpiration = currentPool.expireAt;
      const dateOfChoice = dayjs().format("YYYY-MM-D hh:mm");
      if (dateOfChoice > poolExpiration) {
        return res.status(403).send("Essa enquete já expirou");
      }
  
      const poolChoices = await db.collection("choices").findOne({ title: title });
  
      if (poolChoices) {
        return res.status(409).send("Title não pode ser repetido");
      }
  
      await db.collection("choices").insertOne({ ...choice, votes: 0 });
  
      return res.status(201).send(choice);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }