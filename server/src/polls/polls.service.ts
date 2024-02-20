import { Injectable } from "@nestjs/common";
import { CreatePollFields, JoinPollFields, RejoinPollFields } from "./polls.types";
import { createPollID, createUserID } from "src/createID";

@Injectable()
export class PollsService {
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollID();
    const userID = createUserID();
    return{
        pollID,
        userID,
        ...fields,
        };
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserID();
    return{
        userID,
        ...fields,
        };
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}