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

export interface KweetMetrics {
    likeCount: number;
    rekweetCount: number;
    commentCount: number;
}

export interface MediaModel {
    url: string;
    type: 'image' | 'gif' | 'video';
}

export interface KweetModel {
    author: string;
    username: string;
    date: Date;
    text: KweetText;
    metrics: KweetMetrics;
    media?: MediaModel;
}

export interface NotificationModel {
    type: 'follow' | 'mention';
    username: string;
}
