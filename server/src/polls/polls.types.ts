export type CreatePollFields ={
    question: string;
    votesPerUser: number;
    name: string;
};

export type JoinPollFields ={
    pollID: string;
    name: string;
};

export type RejoinPollFields ={
    pollID: string;
    userID: string;
    name: string;
};