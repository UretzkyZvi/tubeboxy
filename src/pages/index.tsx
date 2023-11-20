import { FC, use, useEffect, useRef, useState } from "react";
import usePlaylist from "~/components/hooks/usePlaylist";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import CategoryMenu from "~/components/categorySystem/CategoryMenu";
import { Channel } from "~/data/type";
import { motion, useAnimation } from "framer-motion";
import { StepForward, StepBack, Play } from "lucide-react";
import ReactPlayer from "react-player";
import { pl } from "@faker-js/faker";

const Index: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [playlist] = usePlaylist();
  const [channels, setChannels] = useState<Channel[]>();
  const [selectChannel, setSelectChannel] = useState<Channel>();
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const [canScroll, setCanScroll] = useState({
    left: false,
    right: false,
  });

  const checkScrollability = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScroll({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth,
      });
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      if (listRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
        setCanScroll({
          left: scrollLeft > 0,
          right: scrollLeft < scrollWidth - clientWidth,
        });
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", checkScroll);
    }

    // Call it initially
    checkScroll();

    // Clean up
    return () => {
      if (listElement) {
        listElement.removeEventListener("scroll", checkScroll);
      }
    };
  }, [playlist]);

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    return () => {
      window.removeEventListener("resize", checkScrollability);
    };
  }, [playlist]);

  useEffect(() => {
    if (selectChannel) {
      if (selectChannel.podcastMode) {
        router.push(`/channel/${selectChannel.id}?podcastMode=true`);
      }
      router.push(`/channel/${selectChannel.id}`);
    }
  }, [selectChannel]);
  useEffect(() => {
    if (playlist) {
      const channels: Channel[] = [];
      playlist.categories.forEach((category) => {
        category.channels.forEach((channel) => {
          channels.push(channel);
        });
      });
      setChannels(channels);
    }
  }, [playlist]);
  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout categories={playlist.categories}>
        {playlist && playlist.categories && (
          <div className="pt-6">
            {playlist.categories.map((category) => (
              <>
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <div
                  ref={containerRef}
                  className="relative m-auto px-6 pt-2 md:px-0"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered && canScroll.left && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-0 top-0 z-20 flex items-center justify-center"
                      onClick={scrollLeft}
                    >
                      <div className="inline-flex h-3/4 items-center  bg-slate-300/50">
                        <StepBack className="h-5 w-5" />
                      </div>
                    </motion.button>
                  )}
                  {isHovered && canScroll.right && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 right-0 top-0 z-20 flex items-center justify-center"
                      onClick={scrollRight}
                    >
                      <div className="inline-flex h-3/4 items-center   bg-slate-300/50">
                        <StepForward className="h-5 w-5" />
                      </div>
                    </motion.button>
                  )}
                  <ul
                    ref={listRef}
                    role="list"
                    className="mb-4 mt-4 flex overflow-x-auto overflow-y-visible"
                  >
                    { 
                      category.channels.map((channel) => (
                        <li
                          key={channel.id}
                          className="h-68 mr-6 w-48"
                          onMouseEnter={() => setHoveredChannel(channel.id)}
                          onMouseLeave={() => setHoveredChannel(null)}
                        >
                          {hoveredChannel === channel.id ? (
                            <div
                              className="aspect-h-9 aspect-w-16 h-52 w-48 overflow-hidden   rounded-lg border bg-black"
                              onClick={() => setSelectChannel(channel)}
                            >
                              <ReactPlayer
                                url={channel.url[0]?.src}
                                playing={true}
                                controls={false}
                                width="100%"
                                height="100%"
                                onError={(e) => console.log(e)}
                                onProgress={(e) => console.log(e)}
                                muted={true}
                                playIcon={<Play className="h-5 w-5" />}
                                onClickPreview={(e) => console.log(e)}
                              />
                            </div>
                          ) : (
                            <>
                              <div className="group aspect-h-9 aspect-w-16 block h-52 w-48  overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img
                                  src={channel.logo}
                                  alt=""
                                  className="pointer-events-none object-center group-hover:opacity-75"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-0 focus:outline-none"
                                  onClick={() => setSelectChannel(channel)}
                                >
                                  <span className="sr-only">
                                    View details for {channel.title}
                                  </span>
                                </button>
                              </div>
                              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                {channel.title}
                              </p>
                              <p className="pointer-events-none block truncate text-sm font-medium text-gray-500">
                                {channel.description}
                              </p>
                            </>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Index;
