import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { Channel, URL } from "@prisma/client";
import CommentBox from "~/components/commentSystem/comment-box";
import CategoryMenu from "~/components/categorySystem/CategoryMenu";
import usePlaylist from "~/components/hooks/usePlaylist";

interface ChannelPageProps {}

const ChannelPage: React.FC<ChannelPageProps> = () => {
  const router = useRouter();
  const channelId = router.query.channelId as string;
  const podcastMode = router.query.podcastMode as string;
  // State declarations
  const [channel, setChannel] = useState<Channel>();

  const [channelUrls, setChannelUrls] = useState<URL[]>();
  const [selectedChannelUrl, setSelectedChannelUrl] = useState<URL>();
  // TRPC mutations and queries
  const channelQuery = api.playlist.getChannel.useQuery(
    { channelId },
    { enabled: !!channelId },
  );

  useEffect(() => {
    if (channelQuery.data) {
      setChannelUrls(channelQuery.data.urls);
      setChannel(channelQuery.data);
      if (channelQuery.data.urls) {
        setSelectedChannelUrl(channelQuery.data.urls[0]);
      }
    }
  }, [channelQuery.data]);

  // Player based on type
  const playerBasedType = (type: string, src: string) => {
    switch (type) {
      case "hls":
      case "youtube":
        return (
          <ReactPlayer
            url={src}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            onError={(e) => console.log(e)}
          />
        );
      case "iframe":
        return <iframe src={src} width="100%" height="100%" allowFullScreen />;
      default:
        return null;
    }
  };

  // Determine the type of channel player
  const channelPlayerBasedType = (selectedChannelUrl: URL | undefined) => {
    if (selectedChannelUrl) {
      return playerBasedType(selectedChannelUrl.type, selectedChannelUrl.src);
    }
    return <div />;
  };
  const [playlist] = usePlaylist();
  return (
    <Layout categories={playlist.categories}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 pt-8 md:grid-cols-3 md:pt-0">
          {channel && (
            <>
              {podcastMode ? (
                <>
                  <div className="col-auto overflow-hidden md:col-span-2 ">
                    <div className="h-96 overflow-hidden md:h-[70vh]  ">
 
                      {channelPlayerBasedType(selectedChannelUrl)}
                    </div>
                    <div className="text-3xl font-bold">{channel.title}</div>
                  </div>
                  <div className="col-auto md:col-span-1 md:pl-4">
                    <>
                      <h3>Episodes</h3>
                      <ul
                        role="list"
                        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 "
                      >
                        {channelUrls?.map((url) => (
                          <li
                            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                            key={url.id}
                          >
                            <div
                              className="flex min-w-0 gap-x-4"
                              onClick={()=>setSelectedChannelUrl(url)}
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-12 w-12 rounded-full"
                                  src={channel.logo}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {url.name}
                                </p>
                                <p className="truncate text-sm text-gray-500">
                                  {url.description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-3 overflow-hidden ">
                    <div className="h-96 overflow-hidden bg-black md:h-[70vh]  ">
                      {channelPlayerBasedType(selectedChannelUrl)}
                    </div>
                    <div className="text-3xl font-bold">{channel.title}</div>
                  </div>
                </>
              )}
            </>
          )}

          {/* <div className="h-96 md:col-span-1 md:ml-4 md:h-[70vh]">
            <CommentBox />
          </div> */}
        </div>
 
      </div>
    </Layout>
  );
};

export default ChannelPage;
