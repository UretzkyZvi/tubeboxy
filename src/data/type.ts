export interface Category {
    id: string;
    title: string;
    logo: string;
    channels: Channel[];
}

export interface ChannelUrl {
    src: string;
    type: string;
    name?: string;
    description?: string;
    tags?: string[];
}

export interface Channel {
    id: string;
    title: string;
    logo: string;
    description: string;
    url: ChannelUrl[];
    podcastMode: boolean;
}

export interface Playlist {
    categories: Category[];
}
