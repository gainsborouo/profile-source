import Image from "next/image";

import Button from "@/components/button";
import Footer from "@/components/footer";

import "./page.css";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="mx-auto max-w-5xl py-12 md:py-16 lg:py-20 px-5">
          <div className="flex flex-col gap-7 items-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                fill
                className="rounded-full"
                src="/images/avatar.png"
                alt="avatar"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
                Ting-Wei Chou
              </h1>
              <h2 className="text-base md:text-lg lg:text-xl text-gray-400 gap-10">
                Computer Science Undergraduate | National Yang Ming Chiao Tung
                University
              </h2>
              <div>
                <Button variant="outline">
                  <a
                    className="flex flex-row gap-2 items-center"
                    href="mailto:userwei.contact@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      viewBox="0 0 16 16"
                    >
                      <g fill="currentColor">
                        <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0"></path>
                        <path d="M4 3h4v1H6.646A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"></path>
                      </g>
                    </svg>

                    <div className="text-sm md:text-base lg:text-lg">
                      Contact Me
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="home-main bg-neutral-500">
        <div className="mx-auto max-w-5xl py-8 md:py-12 lg:py-16 px-5">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
            {/* Links */}
            <div className="flex flex-col bg-neutral-200 p-6 lg:p-8 rounded-2xl gap-3">
              <div className="items-center gap-2 text-neutral-800 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m7.05 11.293l-2.12 2.121a4 4 0 0 0 5.657 5.657l2.828-2.828a4 4 0 0 0 0-5.657l-1.06 1.06a2.5 2.5 0 0 1 0 3.536l-2.83 2.828a2.5 2.5 0 0 1-3.535-3.535l2.12-2.121z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m15.889 11.646l2.121-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.829 2.828a2.5 2.5 0 0 0 0 3.536l-1.06 1.06a4 4 0 0 1 0-5.657l2.828-2.828a4 4 0 0 1 5.657 5.657l-2.121 2.121z"
                  ></path>
                </svg>
                <span className="uppercase font-bold text-base md:text-lg lg:text-xl">
                  Links
                </span>
              </div>
              <div className="grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="https://github.com/gainsborouo"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-700 rounded-lg lg:rounded-xl px-5 py-3 flex items-center gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 432 416"
                  >
                    <path
                      fill="currentColor"
                      d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <div className="font-extrabold text-sm md:text-base lg:text-lg">
                      GitHub
                    </div>
                    <div className="text-xs md:text-xm lg:text-base">
                      @gainsborouo
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/userwei"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-700 rounded-lg lg:rounded-xl px-5 py-3 flex items-center gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <div className="font-extrabold text-sm md:text-base lg:text-lg">
                      LinkedIn
                    </div>
                    <div className="text-xs md:text-xm lg:text-base">
                      @userwei
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/userwei/"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-700 rounded-lg lg:rounded-xl px-5 py-3 flex items-center gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <div className="font-extrabold text-sm md:text-base lg:text-lg">
                      Facebook
                    </div>
                    <div className="text-xs md:text-xm lg:text-base">
                      @userwei
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Websites */}
            <div className="flex flex-col bg-neutral-200 p-6 lg:p-8 rounded-2xl gap-3">
              <div className="items-center gap-2 text-neutral-800 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 lg:w-4 lg:h-4"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.5 1h-5v5h5zm7.75 12.5h-5m0-5h5m-5 2.5h5m.25-5H8L10.75.5zM3 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                  ></path>
                </svg>
                <span className="uppercase font-bold text-base md:text-lg lg:text-xl">
                  Websites
                </span>
              </div>
              <div className="grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="https://blog.userwei.com/"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-700 rounded-lg lg:rounded-xl px-5 py-3 flex items-center gap-5"
                >
                  <div className="relative w-5 h-5 lg:w-6 lg:h-6">
                    <Image
                      fill
                      src="/images/blogFavicon.png"
                      alt="blogFavicon"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-extrabold text-sm md:text-base lg:text-lg">
                      userwei&apos;s Blog
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 lg:w-4 lg:h-4"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2Zm146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"
                        />
                      </svg>
                      <div className="text-xs md:text-xm lg:text-base">
                        blog.userwei.com
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://note.userwei.com/"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-700 rounded-lg lg:rounded-xl px-5 py-3 flex items-center gap-5"
                >
                  <div className="relative w-5 h-5 lg:w-6 lg:h-6">
                    <Image
                      fill
                      src="/images/noteFavicon.png"
                      alt="noteFavicon"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-extrabold text-sm md:text-base lg:text-lg">
                      userwei&apos;s Note
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 lg:w-4 lg:h-4"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2Zm146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"
                        />
                      </svg>
                      <div className="text-xs md:text-xm lg:text-base">
                        note.userwei.com
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Projects */}
            <div className="flex flex-col bg-neutral-200 p-6 lg:p-8 rounded-2xl gap-3">
              <div className="items-center gap-2 text-neutral-800 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.935 11.009V8.793a2.978 2.978 0 0 0-1.529-2.61l-5.957-3.307a2.978 2.978 0 0 0-2.898 0L4.594 6.182a2.978 2.978 0 0 0-1.529 2.611v6.414a2.978 2.978 0 0 0 1.529 2.61l5.957 3.307a2.978 2.978 0 0 0 2.898 0l2.522-1.4"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"
                    ></path>
                    <circle cx="20.329" cy="16.501" r="2.376"></circle>
                  </g>
                </svg>
                <span className="uppercase font-bold text-base md:text-lg lg:text-xl">
                  Projects
                </span>
              </div>
              <div className="grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="https://github.com/NYCU-Service-Learning/nanao-system"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 flex flex-col rounded-lg lg:rounded-xl overflow-hidden"
                >
                  <div className="relative h-28 md:h-32 lg:h-36">
                    <Image
                      fill
                      className="object-cover"
                      src="/images/painSystem.webp"
                      alt="painSystem"
                      priority
                    />
                  </div>
                  <div className="text-neutral-700 px-5 py-3 flex items-center gap-5">
                    <div className="flex flex-col">
                      <div className="font-extrabold text-sm md:text-base lg:text-lg">
                        Pain Interaction System
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 lg:w-4 lg:h-4"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1c.088-.078 1.451-1.305 1.518-1.361c.066-.059.146-.169.041-.292a36.238 36.238 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177zm5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.289.289 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758L8.843 7.407zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308zM2.739 17.053a.538.538 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714l-5.101 4.938z"
                          ></path>
                        </svg>
                        <div className="text-xs md:text-xm lg:text-base">
                          Docker, NestJS, React
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/gainsborouo/NYCU_GDSC-frontend"
                  className="bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 flex flex-col rounded-lg lg:rounded-xl overflow-hidden"
                >
                  <div className="relative h-28 md:h-32 lg:h-36">
                    <Image
                      fill
                      className="object-cover"
                      src="/images/gdscWebsite.webp"
                      alt="painSystem"
                      priority
                    />
                  </div>
                  <div className="text-neutral-700 px-5 py-3 flex items-center gap-5">
                    <div className="flex flex-col">
                      <div className="font-extrabold text-sm md:text-base lg:text-lg">
                        NYCU GDSC Frontend
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 lg:w-4 lg:h-4"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1c.088-.078 1.451-1.305 1.518-1.361c.066-.059.146-.169.041-.292a36.238 36.238 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177zm5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.289.289 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758L8.843 7.407zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308zM2.739 17.053a.538.538 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714l-5.101 4.938z"
                          ></path>
                        </svg>
                        <div className="text-xs md:text-xm lg:text-base">
                          React
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
