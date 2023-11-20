const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ChannelsCategories = {
  categories: [
    {
      id: "ebceea60-dc58-478e-8fc4-a560e6cd4fa1",
      title: "Kids",
      logo: "https://webdevtv.blob.core.windows.net/public/Animation;kids.png",
      channels: [
        {
          id: "0214696a-288c-40f4-a58d-4f8f2c30bd01",
          title: "BabyFirst",
          logo: "https://i.imgur.com/WxLHBwu.png",
          description:
            "BabyFirst is an American pay television channel producing and distributing content for babies from 0–3 years and their parents through television, the internet, and mobile applications. The channel is owned by First Media US.",
          url: [
            {
              src: "hhttps://origin1.noisypeak.com/4XhPa5v93P3za6G0cMyV/playlist.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "8f31302d-dd30-47a3-857e-c33177aed0b3",
          title: "כאן חינוכית",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/KanHinuchit.svg/512px-KanHinuchit.svg.png",
          description:
            "Kan Educational is a public television channel in Israel designated for children, on behalf of the Israel Broadcasting Corporation. The channel launched on August 15, 2018 and replaced Israeli Educational Television, which preceded it",
          url: [
            {
              src: "https://kan23.media.kan.org.il/hls/live/2024691/2024691/master.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "33b3fb5d-630e-49b5-ab9b-10a1f0664244",
          title: "Baby Shark TV",
          logo: "https://i.imgur.com/SbBKr8L.png",
          description:
            "Baby Shark and his best friend, William, embark on fun-filled adventures in their community of Carnivore Cove.",
          url: [
            {
              src: "https://newidco-babysharktv-1-us.roku.wurl.tv/playlist.m3u8",
              type: "hls",
            },
          ],
        },
      ],
    },
    {
      id: "94fcc989-d0b6-48fb-a561-3c31ca27046b",
      title: "News",
      logo: "https://webdevtv.blob.core.windows.net/public/News.png",
      channels: [
        {
          id: "8fe1d35d-74cb-4256-ab3f-cc09f21d20c9",
          title: "ABC News Live",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ABC_News_Live_logo.svg/512px-ABC_News_Live_logo.svg.png",
          description:
            "ABC News Live is an American streaming video news channel for breaking news, live events, newscasts, and longer-form reports and documentaries operated by ABC News since 2018.",
          url: [
            {
              src: "https://abcnews-streams.akamaized.net/hls/live/2023560/abcnews1/master.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "512c1cb8-ecaa-412e-80b0-a7ea1b3ed314",
          title: "CNN",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
          description:
            "The Cable News Network is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable.",
          url: [
            {
              src: "https://kan23.media.kan.org.il/hls/live/2024691/2024691/master.m3u8",
              type: "hls",
            },
          ],
        },

        {
          id: "cf8b08da-d0c1-4ac3-bb13-acbab341bda7",
          title: "DW English",
          logo: "https://i.imgur.com/A1xzjOI.png",
          description:
            "DW News is a global news TV program broadcast by German public state-owned international broadcaster Deutsche Welle. The first program aired the summer of 2015.",
          url: [
            {
              src: "https://dwstream5-lh.akamaihd.net/i/dwstream5_live@124410/master.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "17b15bdb-336d-494e-b33a-77d7a3c4613a",
          title: "BBC News",
          logo: "https://i.imgur.com/vSz2WEp.png",
          description:
            "DW News is a global news TV program broadcast by German public state-owned international broadcaster Deutsche Welle. The first program aired the summer of 2015.",
          url: [
            {
              src: "https://vs-cmaf-push-uk-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/iptv_hd_abr_v1.mpd",
              type: "hls",
            },
          ],
        },
        {
          id: "f5e59c96-3fde-4a70-b39d-6d67d39185d9",
          title: "Euronews",
          logo: "https://static.epg.best/gb/EuroNews.uk.png",
          description:
            "Euronews is a European television news network, headquartered in Brussels, Belgium. The network began broadcasting on 1 January 1993 and covers world news from a European perspective.",
          url: [
            {
              src: "https://d1mpprlbe8tn2j.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/euronewsLive/87O7AhxRUdeeIVqf/ewnsabren_eng.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "40850608-48af-45f4-9f2c-dd7016d39897",
          title: "I24 News Arabic",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/LOGO_i24NEWS.png/512px-LOGO_i24NEWS.png",
          description: "",
          url: [
            {
              src: "https://bcovlive-a.akamaihd.net/773a2fa387914315ad11e6957cd54f6e/eu-central-1/5377161796001/playlist-all_dvr.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "c41d3f7f-770f-4da2-b5ee-5916c26c186c",
          title: "I24 News English",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/LOGO_i24NEWS.png/512px-LOGO_i24NEWS.png",
          description: "",
          url: [
            {
              src: "https://bcovlive-a.akamaihd.net/773a2fa387914315ad11e6957cd54f6e/eu-central-1/5377161796001/playlist-all_dvr.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "93cc873e-4501-4ffb-814e-26e150b9979e",
          title: "I24 News French",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/LOGO_i24NEWS.png/512px-LOGO_i24NEWS.png",
          description: "",
          url: [
            {
              src: "https://bcovlive-a.akamaihd.net/773a2fa387914315ad11e6957cd54f6e/eu-central-1/5377161796001/playlist-all_dvr.m3u8",
              type: "hls",
            },
          ],
        },
      ],
    },
    {
      id: "bd3e0514-4f2f-41f3-a728-97cce5b65d3e",
      title: "Religious",
      logo: "https://webdevtv.blob.core.windows.net/public/Religious.png",
      channels: [
        {
          id: "37b8895a-088d-48f6-bdf4-16459724cef8",
          title: "Hidabroot",
          logo: "https://i.imgur.com/CTH4Hu2.png",
          description: "",
          url: [
            {
              src: "https://cdn.cybercdn.live/HidabrootIL/Live97/playlist.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "119695ca-1bc4-4ed7-b507-d8f2fa28a8fa",
          title: "Shelanu.TV",
          logo: "https://i.imgur.com/UVz2Ojq.png",
          description: "",
          url: [
            {
              src: "https://1247634592.rsc.cdn77.org/1247634592/playlist.m3u8",
              type: "hls",
            },
          ],
        },
      ],
    },
    {
      id: "9589c4f8-8328-46aa-9134-dbcc8e1e73ce",
      title: "Shop",
      logo: "https://webdevtv.blob.core.windows.net/public/Shop.png",
      channels: [
        {
          id: "12439327-3e1e-4884-9f6b-c7c5ccdabdd0",
          title: "The Shopping Channel",
          logo: "https://upload.wikimedia.org/wikipedia/he/b/b9/%D7%A1%D7%9E%D7%9C%D7%99%D7%9C_%D7%A2%D7%A8%D7%95%D7%A5_%D7%94%D7%A7%D7%A0%D7%99%D7%95%D7%AA.jpg",
          description: "",
          url: [
            {
              src: "https://shoppingil-rewriter.vidnt.com/index.m3u8",
              type: "hls",
            },
          ],
        },
      ],
    },
    {
      id: "95a8eb1a-a892-4ff6-ac61-a397e011cd72",
      title: "Entertainment",
      logo: "https://webdevtv.blob.core.windows.net/public/Entertainment.png",
      channels: [
        {
          id: "30b60bb3-85e8-4a8b-9fd0-a116704c0aa5",
          title: "Channel 13",
          logo: "https://i.imgur.com/eFM3bTq.png",
          description:
            "Channel 13, is an Israeli free-to-air television channel operated by Reshet Media which is owned by Len Blavatnik’s Access, Discovery, Nadav Topolsky, Udi Angel and Strauss Family. It was launched on 1 November 2017 as one of two replacements of the outgoing Channel 2.",
          url: [
            {
              src: "https://d18b0e6mopany4.cloudfront.net/out/v1/08bc71cf0a0f4712b6b03c732b0e6d25/index.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "793a73e2-a1c5-4ec8-a978-34933257ded4",
          title: "Now 14",
          logo: "https://i.imgur.com/Iq2Kb69.png",
          description:
            "Channel 14 is an Israeli commercial television channel. The channel is aimed at a right-wing audience, specifically supporters of current Israeli prime minister Benjamin Netanyahu. The controlling shareholder of the channel is Yitzchak Mirilashvili.",
          url: [
            {
              src: "https://now14.g-mana.live/media/91517161-44ab-4e46-af70-e9fe26117d2e/mainManifest.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "ce326584-60d9-4368-9367-8478ee63240f",
          title: "KAN 11 Israel",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kan11Logo.svg/512px-Kan11Logo.svg.png",
          description:
            "Kan 11 is an Israeli state-owned free-to-air television channel. Operated by the Israeli Public Broadcasting Corporation, it launched on 15 May 2017, replacing Channel 1 after the closure of the Israel Broadcasting Authority. It is one of the six free-to-air channels in the country",
          url: [
            {
              src: "https://kan11w.media.kan.org.il/hls/live/2105694/2105694/master.m3u8",
              type: "hls",
            },
          ],
        },
        {
          id: "569f66b5-ed11-4033-89bf-a6ae2d0c465e",
          title: "Mako",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ54v1YPy9qVTyH3FCmU371EZvBSg-DocS4c0GXVesQlZKXIFRfRLzOlX4F-zH_dzXQo&usqp=CAU",
          description: "Mako Channel 12",
          url: [
            {
              src: "https://www.mako.co.il/AjaxPage?jspName=embedHTML5video.jsp&galleryChannelId=7c5076a9b8757810VgnVCM100000700a10acRCRD&videoChannelId=d1d6f5dfc8517810VgnVCM100000700a10acRCRD&vcmid=1e2258089b67f510VgnVCM2000002a0c10acRCRD",
              type: "iframe",
            },
          ],
        },
      ],
    },
    {
      id: "4a35ce4c-a393-4d30-afe8-ba359f014e83",
      title: "Podcasts",
      logo: "https://webdevtv.blob.core.windows.net/public/Entertainment.png",
      channels: [
        {
          id: "775cd244-2f2a-4846-8d8e-7087285e30f8",
          title: "Lex Fridman",
          podcastMode: true,
          logo: "https://lexfridman.com/wordpress/wp-content/uploads/2019/03/lex_fridman_deep_learning_course.jpg",
          description:
            "Lex Fridman (pronounced: Freedman) Research Scientist, MIT, 2015 - current (2023) Laboratory for Information and Decision Systems (LIDS) Research: Human-robot interaction and machine learning.",
          url: [
            {
              src: "https://www.youtube.com/watch?v=r4wLXNydzeY&t=36s",
              type: "youtube",
              name: "John Mearsheimer: Israel-Palestine, Russia-Ukraine, China, NATO, and WW3 | Lex Fridman Podcast",
              description:
                "John Mearsheimer is an international relations scholar at University of Chicago. He is one of the most influential and controversial thinkers in the world on the topics of war and power.",
              tags: ["Politics", "War", "Power"],
            },
            {
              src: "https://www.youtube.com/watch?v=r4wLXNydzeY&t=36s",
              type: "youtube",
              name: "Elon Musk: War, AI, Aliens, Politics, Physics, Video Games, and Humanity",
              description:
                "Elon Musk is CEO of X, xAI, SpaceX, Tesla, Neuralink, and The Boring Company.",
              tags: [
                "Politics",
                "War",
                "Power",
                "AI",
                "Space",
                "Physics",
                "Video Games",
                "Humanity",
              ],
            },
            {
              src: "https://www.youtube.com/watch?v=co_MeKSnyAo",
              type: "youtube",
              name: "Jared Kushner: Israel, Palestine, Hamas, Gaza, Iran, and the Middle East",
              description:
                "Jared Kushner is a former Senior Advisor to President Donald Trump and author of Breaking History.",
              tags: ["Politics", "War"],
            },
          ],
        },
        {
          id: "27f37755-e194-4848-b6a1-6709c65c6839",
          title: "Joe Rogan Experience",
          podcastMode: true,
          logo: "https://yt3.googleusercontent.com/ytc/APkrFKbBmJ8WENxgTF75_I_b6zMCfinbcO7zWEwQcvbYxA=s176-c-k-c0x00ffffff-no-rj-mo",
          description:
            "The Joe Rogan Experience is a free audio and video podcast hosted by American comedian, actor, sports commentator, martial artist, and television host, Joe Rogan.",
          url: [
            {
              src: "https://open.spotify.com/embed/episode/4o99bPJErwHqhjVRGWPS79/video?utm_source=generator",
              type: "iframe",
              name: "Joe Rogan Experience #2064 - Mike Baker",
              description:
                "Mike Baker is a former CIA covert operations officer. Currently he is the president of Diligence LLC, a global intelligence and security firm.",
              tags: ["Politics", "War"],
            },
            {
              src: "https://open.spotify.com/embed/episode/0M2MiAX4LPq8pmDjcMTWuQ/video?utm_source=generator",
              type: "iframe",
              name: "#2063 – The Rock",
              description:
                "Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.",
              tags: ["Comedy", "Movies", "Wrestling", "Sports"],
            },
            {
              src: "https://open.spotify.com/embed/episode/3nMVkf8bAVekGEbMA3dX7s/video?utm_source=generator",
              type: "iframe",
              name: "#2062 – Will & Jenni Harris",
              description:
                "Will & Jenni Harris are father/daughter farmers and owners of White Oak Pastures.",
              tags: ["Farming", "Food"],
            },
          ],
        },
        {
          id: "9fb82155-8475-4821-bfe2-511eaf4226cf",
          title: "The Diary of a CEO",
          podcastMode: true,
          logo: "https://i.ytimg.com/vi/IdTMDpizis8/maxresdefault.jpg",
          description:
            "The Diary of a CEO is an unfiltered journey into the remarkable stories of the people that have defined culture, achieved greatness and created stories worth studying.",
          url: [
            {
              src: "https://www.youtube.com/watch?v=vOvLFT4v4LQ",
              type: "youtube",
              name: "The Savings Expert: “Do Not Buy A House!” Do THIS Instead! - Morgan Housel",
              description:
                "Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal.",
              tags: ["Finance", "Investing", "Money"],
            },
            {
              src: "https://www.youtube.com/watch?v=ycTZ_t-aiuU",
              type: "youtube",
              name: "The ADHD Doctor: “I’ve Scanned 250,000 Brains” You (Steven Bartlett) Have ADHD!!! Dr Daniel Amen",
              description:
                "Dr. Daniel Amen is a physician, founder of Amen Clinics and BrainMD, double board-certified psychiatrist and nine-time New York Times bestselling author.",
              tags: ["Health", "ADHD", "Brain"],
            },
            {
              src: "https://www.youtube.com/watch?v=ow3ao6YsCgQ",
              type: "youtube",
              name: "he Love Expert: Why Women Are Addicted To Toxic Men,`Have A Boring Relationship Instead!` Logan Ury",
              description:
                "Logan Ury is a behavioral scientist turned dating coach and the author of How to Not Die Alone.",
              tags: ["Relationships", "Love"],
            },
          ],
        },
      ],
    },
  ],
};

async function main() {
  console.log("Starting database seeding...");
  for (const category of ChannelsCategories.categories) {
    console.log(`Seeding category: ${category.title}`);
    const createdCategory = await prisma.category.create({
      data: {
        id: category.id,
        title: category.title,
        logo: category.logo,
      },
    });

    for (const channel of category.channels) {
      console.log(`Seeding channel: ${channel.title}`);
      const createdChannel = await prisma.channel.create({
        data: {
          id: channel.id,
          title: channel.title,
          logo: channel.logo,
          description: channel.description,
          categoryId: createdCategory.id, // Assuming a foreign key to ChannelCategory
          podcastMode: channel.podcastMode ?? false,
          // Add other fields as necessary
        },
      });

      for (const url of channel.url) {
        console.log(`Seeding url: ${url.src}`);
        await prisma.uRL.create({
          data: {
            src: url.src,
            type: url.type,
            channelId: createdChannel.id,
            name: url.name,
            description: url.description,
            tags: url.tags,
          },
        });
      }
    }
  }
  console.log("Database seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
