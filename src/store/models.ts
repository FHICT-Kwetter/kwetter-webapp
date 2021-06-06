export interface HashTag {
    topic: string;
    value: string;
    start: number;
    end: number;
}

export interface Mention {
    username: string;
    value: string;
    start: number;
    end: number;
}

export interface KweetText {
    content: string;
    length: number;
    hashtags: HashTag[];
    mentions: Mention[];
}

export interface KweetModel {
    authorId: string;
    username: string;
    createdAt: Date;
    text: KweetText;
}

