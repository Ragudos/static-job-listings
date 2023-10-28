import React from "react";

import { Button } from "./components/button";

import xIcon from "./assets/images/icon-remove.svg";
import bgHeaderDesktop from "./assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "./assets/images/bg-header-mobile.svg";
import { cn } from "./lib/utils";

import data from "./assets/data.json";

import photoSnapImg from "./assets/images/photosnap.svg";
import manageImg from "./assets/images/manage.svg";
import accountImg from "./assets/images/account.svg";
import myHomeImg from "./assets/images/myhome.svg";
import loopStudiosImg from "./assets/images/loop-studios.svg";
import faceItImg from "./assets/images/faceit.svg";
import shortlyImg from "./assets/images/shortly.svg";
import airFilterCompanyImg from "./assets/images/the-air-filter-company.svg";
import insureImg from "./assets/images/insure.svg";
import eyeCoImg from "./assets/images/eyecam-co.svg";

interface List {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: true;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const imageMap: {
  [key: string]: string;
} = {
  Photosnap: photoSnapImg,
  Manage: manageImg,
  Account: accountImg,
  MyHome: myHomeImg,
  "Loop Studios": loopStudiosImg,
  FaceIt: faceItImg,
  Shortly: shortlyImg,
  Insure: insureImg,
  "Eyecam Co.": eyeCoImg,
  "The Air Filter Company": airFilterCompanyImg
};

function searchIfAnItemInArrayIncludesInAnother(array: string[], array2: string[]) {
  for (const item of array) {
    for (const item2 of array2) {
      if (item == item2) {
        return true;
      }
    }
  }

  return false;
}

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list] = React.useState<List[]>(data as List[]);
  const [filters, setFilters] = React.useState(["React", "Frontend", "JavaScript"]);

  return (
    <main>
      <div className="flex flex-col gap-12 items-center justify-center">
        <div className="w-[375px] h-[156px] xl:w-[1440px] xl:h-[156px]">
          <picture>
            <source srcSet={bgHeaderDesktop} media="(min-width: 1440px)"></source>
            <img src={bgHeaderMobile} alt="Background Brand Design" width={375} height={156} />
          </picture>
        </div>

        <div className="container w-[375px] xl:w-[1440px] flex flex-col gap-12 xl:gap-8">
          {filters.length > 0 && (
            <section className="-mt-20 flex justify-between gap-8 bg-white px-8 py-4 rounded-md shadow-xl shadow-neutral-darkest-grayish-cyan/20">
              <h2 className="sr-only">List of filters</h2>

              <ul className="flex gap-4 flex-wrap">
                {filters.map((filter) => (
                  <li key={filter} className="flex items-center text-xs">
                    <div className="text-neutral-dark-grayish-cyan font-bold bg-neutral-light-grayish-cyan-filter-tablets p-2 rounded-tl-md rounded-bl-md">
                      {filter}
                    </div>
                    <Button
                      type="button"
                      variant="colorToBlackOnHoverBg"
                      size="square"
                      className="rounded-tr-md rounded-br-md"
                      aria-label={"Remove " + filter + " from filters"}
                      onClick={() => {
                        setFilters((curr) => {
                          return curr.filter((item) => {
                            return item == filter ? null : item;
                          });
                        });
                      }}
                    >
                      <img
                        src={xIcon}
                        alt="Close Icon"
                        width={16}
                        height={16}
                      />
                    </Button>
                  </li>
                ))}
              </ul>

              <Button
                variant="underlineHover"
                onClick={() => {
                  setFilters([]);
                }}
              >
                Clear
              </Button>
            </section>
          )}

          <div className="flex flex-col gap-12 xl:gap-4 items-center">
            {list && list.map((item) => {
              const isHidden = filters.length > 0 && !filters.includes(item.role) && !filters.includes(item.level) && !filters.includes(item.position) && !searchIfAnItemInArrayIncludesInAnother(filters, item.languages) && !searchIfAnItemInArrayIncludesInAnother(filters, item.tools);

              return (
                <article
                  className={cn(
                    "transition-[transform,opacity] duration-200 ease-in-out w-[100%] relative bg-white rounded-md shadow-xl shadow-neutral-darkest-grayish-cyan/10 px-6 py-8 xl:p-8 flex justify-between flex-col xl:flex-row gap-4",
                    { "before:absolute before:rounded-tl-md before:rounded-bl-md before:left-0 before:top-0 before:h-full before:w-[0.375rem] before:bg-neutral-dark-grayish-cyan": item.featured },
                    { "hidden": isHidden }
                  )}
                  key={item.id}
                  data-level={item.level}
                  data-languages={item.languages.join(",")}
                  data-tools={item.tools.join(",")}
                  data-role={item.role}
                >
                  <div className="-mt-14 xl:mt-0 flex gap-2 xl:gap-4 xl:items-center flex-col xl:flex-row">
                    <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full">
                      <img
                        src={imageMap[item.company]}
                        alt={`${item.company}'s Logo`}
                        width={64}
                        height={64}
                        style={{ opacity: "0" }}
                        onLoad={(e) => {
                          const target = e.target as HTMLElement;

                          target.style.opacity = "1";
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="text-sm flex gap-4 items-center">
                        <span className="font-bold text-primary-dark-cyan text-xs">{item.company}</span>

                        <div className="font-bold flex gap-2">
                          {item.new && (
                            <span className="text-xs rounded-full px-2 py-1 bg-primary-dark-cyan text-neutral-light-grayish-cyan-background">
                              NEW!
                            </span>
                          )}

                          {item.featured && (
                            <span className="text-xs rounded-full px-2 py-1 bg-neutral-darkest-grayish-cyan text-neutral-light-grayish-cyan-background">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>

                      <Button
                        variant="colorToBlackOnHoverText"
                        className="text-start justify-start p-0 text-base"
                      >
                        {item.position}
                      </Button>

                      <div className="text-base font-bold text-neutral-dark-grayish-cyan flex gap-2 items-center">
                        <span>{item.postedAt}</span>
                        <span className="w-[0.175rem] h-[0.175rem] rounded-full bg-primary-dark-cyan"></span>
                        <span>{item.contract}</span>
                        <span className="w-[0.175rem] h-[0.175rem] rounded-full bg-primary-dark-cyan"></span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="xl:hidden bg-primary-dark-cyan py-[0.025rem]" />

                  <ul className="flex gap-4 flex-wrap items-center" aria-label="List of tools, languages, and level for this job position">
                    {item.tools.map((tool) => (
                      <li key={`tool-item-${tool}`}>
                        <Button
                          className="px-2 py-1 rounded-md text-sm"
                          onClick={() => {
                            setFilters((curr) => {
                              return curr.includes(tool) ? curr : [...curr, tool];
                            });
                          }}
                        >
                          {tool}
                        </Button>
                      </li>
                    ))}
                    {item.languages.map((language) => (
                      <li key={`language-item-${language}`}>
                        <Button
                          className="px-2 py-1 rounded-md text-sm"
                          onClick={() => {
                            setFilters((curr) => {
                              return curr.includes(language) ? curr : [...curr, language];
                            });
                          }}
                        >
                          {language}
                        </Button>
                      </li>
                    ))}
                    <li>
                      <Button
                        className="px-2 py-1 rounded-md text-sm"
                        onClick={() => {
                          setFilters((curr) => {
                            return curr.includes(item.position) ? curr : [...curr, item.position];
                          });
                        }}
                      >
                        {item.position}
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="px-2 py-1 rounded-md text-sm"
                        onClick={() => {
                          setFilters((curr) => {
                            return curr.includes(item.role) ? curr : [...curr, item.role];
                          });
                        }}
                      >
                        {item.role}
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="px-2 py-1 rounded-md text-sm"
                        onClick={() => {
                          setFilters((curr) => {
                            return curr.includes(item.level) ? curr : [...curr, item.level];
                          });
                        }}
                      >
                        {item.level}
                      </Button>
                    </li>
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
