import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
const BLOGS = [
  {
    title: "Tokenized Asset Coalition State of Tokenization 2024",
    description:
      "The Tokenization Asset Coalition presents its 2024 update, highlighting the most notable developments to date. Read our group's report below to stay informed on asset tokenization and what to monitor in the final three months of the year.",
    image: "https://cdn.prod.website-files.com/6470c67dbb66a109d9a2e811/66e07859efc4bc5df31a3e71_2.PNG",
    link: "https://www.rwa.xyz/blog/tokenized-asset-coalition-state-of-tokenization-2024",
  },
  {
    title: "The Stablecoin Report Everyone's Been Waiting For",
    description:
      "We’re thrilled to share something truly special: Stablecoins: The Practitioner's Guide – a comprehensive deep dive into the $250 billion stablecoin ecosystem that's reshaping global finance.",
    image: "https://cdn.prod.website-files.com/6470c67dbb66a109d9a2e811/6837772bc04517402d1bd50f_Screenshot%202025-05-28%20at%204.50.41%E2%80%AFPM.png",
    link: "https://www.rwa.xyz/blog/the-stablecoin-report-everyones-been-waiting-for",
  },
  {
    title: "Introducing the TAC Member Spotlight Series",
    description: "Read the first of our new TAC Member Spotlight series, focused on tokenized gold and featuring Matrixdock’s XAUm product",
    image: "https://cdn.prod.website-files.com/6470c67dbb66a109d9a2e811/680f8df69a74a67bb06378d4_Screenshot%202025-04-28%20at%206.17.06%E2%80%AFPM.png",
    link: "https://www.rwa.xyz/blog/tac-member-spotlight-series-matrixdock",
  },
  {
    title: "Top 5 Favorite Resources on Real-World Assets",
    description:
      "Tokenization and the real-world assets sector evolves rapidly. In helping people get up to speed, we noticed that we kept sending over the same set of useful and foundational resources. Today we're excited to share those with you as well!",
    image: "https://cdn.prod.website-files.com/6470c67dbb66a109d9a2e811/64cae752f365d61192db02da_Frame%206380.png",
    link: "https://www.rwa.xyz/blog/top-5-favorite-resources-on-real-world-assets",
  },
];

export function Blog() {
  const [current, setCurrent] = useState(0);
  console.log("🚀 ~ Blog ~ current:", current);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % BLOGS.length);
    window.location.hash = `#slice${(current + 1) % BLOGS.length}`;
    console.log("🚀 ~ Blog ~ handleNext ~ current:", current);
  };
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + BLOGS.length) % BLOGS.length);
    window.location.hash = `#slice${(current - 1 + BLOGS.length) % BLOGS.length}`;
    console.log("🚀 ~ Blog ~ handlePrev ~ current:", current);
  };
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full m-auto"
    >
      <CarouselContent>
        {BLOGS.map((blog, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div key={index}>
              <div className="flex flex-col">
                <Image src={blog.image} alt={blog.title} width={370} height={200} className="w-[370px] h-[200px] object-cover" />
                <h3 className="mb-4 text-2xl font-bold">{blog.title}</h3>
                <p className="leading-relaxed text-slate-300">
                  {blog.description.slice(0, 100)}...
                  <br />
                  <a target="__blank" href={blog.link} className="text-blue-500 underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
