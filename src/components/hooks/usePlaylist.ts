import { useEffect, useState } from "react";
import { Channel, Playlist } from "~/data/type";
import { api } from "~/utils/api";


const usePlaylist = (): [Playlist] => {
    const [playlist, setPlaylist] = useState<Playlist>({ categories: [] });

    const data = api.playlist.getPlaylist.useQuery()

    useEffect(() => {
        if (data.data !== undefined) {
            const newPlaylist: Playlist = { categories: [] };
            data.data.forEach((category) => {
                const channels: Channel[] = [];
                category.channels.forEach((channel) => {
                    channels.push({
                        description: channel.description,
                        id: channel.id,
                        logo: channel.logo,
                        title: channel.title,
                        podcastMode: channel.podcastMode as boolean,
                        url: channel.urls.map((url) => {
                            return {
                                id: url.id,
                                src: url.src,
                                type: url.type,
                                channelId: url.channelId,
                                description: url.description ?? "",
                                name: url.name ?? "",
                                tags: url.tags ?? [],
                            };
                        }),
                    });
                });
                newPlaylist.categories.push({
                    channels,
                    id: category.id,
                    logo: category.logo,
                    title: category.title
                });
            })

            setPlaylist(newPlaylist);
        }
    }, [data.data]);

    return [playlist];
};

export default usePlaylist;
