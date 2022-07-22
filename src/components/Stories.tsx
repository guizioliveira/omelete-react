import { useState, useEffect } from "react";
import { Story } from "../@types";
import storiesJson from "../data/stories.json";
import { useWindowSize } from "../hooks/useWindowSize";

export function Stories() {
  const stories = storiesJson as Story[];
  const screenSize = useWindowSize();
  const [storiesOnScreen, setStoriesOnScreen] = useState<number>(0);

  useEffect(() => {
    if (screenSize.width > 1280) {
      setStoriesOnScreen(8);
    } else if (screenSize.width <= 1000) {
      setStoriesOnScreen(3);
    } else {
      setStoriesOnScreen(6);
    }
  }, [screenSize]);

  return (
    <section className="relative w-full pb-4 md:pb-8">
      <div className="w-full h-16 bg-primary absolute z-0"></div>
      <div className="container mx-auto w-full relative">
        <div className="flex w-full items-center pt-2">
          <ul className="flex w-full md:gap-6 gap-2 justify-center">
            {stories
              .slice(0, storiesOnScreen)
              .sort((a, b) => (a.id > b.id ? -1 : 1))
              .map((story) => (
                <li className="max-w-min" key={story.id}>
                  <a href="#" className="group">
                    <div className="relative after:transition-transform after:duration-500 flex items-center justify-center rounded-full md:h-[100px] md:w-[100px] h-[85px] w-[85px] bg-primary after:bg-[#e0a904] after:w-full after:h-full after:absolute after:rounded-full after:scale-0 group-hover:after:scale-100">
                      <img
                        onError={({ currentTarget }) => {
                          currentTarget.src = "src/assets/stories/image.jpg";
                        }}
                        className="rounded-full md:h-[90px] md:w-[90px] h-[75px] w-[75px] z-10"
                        src={story.image_url}
                      />
                    </div>
                    <p className="font-uni pt-1 md:text-sm text-xs md:leading-4 italic text-center md:leading-2 leading-3">
                      {story.title}
                    </p>
                  </a>
                </li>
              ))}
            <li className="max-w-min">
              <a href="#" className="group">
                <div className="relative after:transition-transform after:duration-500 flex items-center justify-center rounded-full md:h-[100px] md:w-[100px] h-[85px] w-[85px] bg-primary after:bg-[#e0a904] after:w-full after:h-full after:absolute after:rounded-full after:scale-0 group-hover:after:scale-100">
                  <div className="rounded-full flex justify-center bg-white  md:h-[90px] md:w-[90px] h-[75px] w-[75px] z-10">
                    <i className="text-primary md:text-[85px] font-uni not-italic font-light text-7xl">
                      +
                    </i>
                  </div>
                </div>
                <p className="font-uni pt-1 md:text-sm text-xs italic text-center md:leading-4 leading-3">
                  Mais
                  <br />
                  stories
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
