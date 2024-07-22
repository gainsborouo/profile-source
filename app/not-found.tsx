import Link from "next/link";

import Button from "@/app/components/button";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto max-w-5xl py-12 md:py-16 lg:py-20 px-5">
        <div className="flex flex-col gap-7 items-start">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
              404 Page not found
            </h1>
            <h2 className="text-base md:text-lg lg:text-xl text-gray-400 gap-10">
              We are sorry, but the page you are looking for does not exist.
            </h2>
            <div>
              <Button variant="outline">
                <Link className="flex flex-row gap-2 items-center" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    ></path>
                  </svg>

                  <div className="text-sm md:text-base lg:text-lg">
                    Back to Home
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
