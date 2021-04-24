import { KweetModel } from './models';

const FakeKweets: KweetModel[] = [
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with an image included',
            length: 'A mock kweet with an image included'.length,
            hashtags: [],
            mentions: []
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        },
        media: {
            url: 'https://i.pinimg.com/736x/43/d5/72/43d5728733b3bbce6b9c2dc6893221a0.jpg',
            type: 'image',
        }
    },
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with a video included',
            length: 'A mock kweet with a video included'.length,
            hashtags: [],
            mentions: []
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        },
        media: {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            type: 'video'
        }
    },
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with a gif included',
            length: 'A mock kweet with a gif included'.length,
            hashtags: [],
            mentions: []
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        },
        media: {
            url: 'https://media.giphy.com/media/RMrNQ0HszuxzmvdBdw/giphy.gif',
            type: 'gif'
        }
    },
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with only text.',
            length: 'A mock kweet with only text.'.length,
            hashtags: [],
            mentions: []
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        }
    },
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with a #hashtag.',
            length: 'A mock kweet with a #hashtag.'.length,
            hashtags: [{
                topic: 'hashtag',
                value: '#hashtag',
                start: 20,
                end: 27,
            }],
            mentions: []
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        }
    },
    {
        author: 'Dirk Heijnen',
        username: 'dirk_heijnen',
        date: new Date('2021-03-11 12:00:00'),
        text: {
            content: 'A mock kweet with a @mention.',
            length: 'A mock kweet with a @mention.'.length,
            hashtags: [],
            mentions: [{
                username: 'mention',
                value: '@mention',
                start: 20,
                end: 27,
            }]
        },
        metrics: {
            likeCount: 0,
            commentCount: 0,
            rekweetCount: 0
        }
    },
];


export default FakeKweets;
