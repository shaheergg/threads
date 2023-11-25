import React from "react";
import { useState } from "react";
function Thread() {
  const imgAddress =
    "data:image/jpeg;base64,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";
  const [like, setLike] = useState(false);
  return (
    <div className="flex w-full gap-2 py-4 border-b border-neutral-800 min-h-fit">
      <div className="flex flex-col items-center justify-between w-12 px-1 py-2 space-y-2">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={imgAddress}
          alt=""
        />
        <div className="flex-1 w-1 rounded-full bg-accent"></div>
        <div className="p-2 text-xs font-semibold rounded-full bg-accent"></div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold cursor-pointer hover:underline">
            johnnydepp
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-400">3 hrs</span>
            <button className="p-2 transition-all rounded-full text-content hover:bg-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <p className="text-content">
            To my dear ‘Modi’ film family, Köszönöm for all your exceptional
            efforts without which this film could not have been made. Please
            accept my eternal admiration, appreciation, respect and love, JD. X.
            [Budapest, 2023] - Photo by Leo Pinter
          </p>
        </div>
        <div className="flex items-center gap-2 py-4">
          <button
            onClick={() => setLike(!like)}
            className="p-2 transition-all rounded-full hover:bg-accent"
          >
            {like ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.4286 5.25C21.8571 5.25 19.5714 6.38966 18 8.24162C16.4286 6.38966 14 5.25 11.4286 5.25C6.85714 5.25 3 9.09637 3 13.655C3 13.9399 3 14.2249 3 14.5098C3.57143 21.4902 11 27.331 15.4286 30.0377C16.1429 30.4651 17 30.75 18 30.75C18.8571 30.75 19.7143 30.4651 20.5714 30.0377C25 27.1885 32.4286 21.4902 33 14.5098C33 14.2249 33 13.9399 33 13.655C33 9.09637 29.1429 5.25 24.4286 5.25Z"
                  fill="red"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.45 5.25C21.9 5.25 19.65 6.28179 18 8.19798C16.35 6.28179 14.1 5.25 11.55 5.25C6.9 5.25 3 9.08237 3 13.6517C3 13.9465 3 14.2413 3 14.5361C3.6 21.4639 11.1 27.2124 15.45 30.013C16.2 30.4552 17.1 30.75 18 30.75C18.9 30.75 19.8 30.4552 20.55 30.013C24.9 27.2124 32.4 21.4639 33 14.6835C33 14.3887 33 14.0939 33 13.7991C33 9.08237 29.1 5.25 24.45 5.25ZM30 14.2413C29.55 20.1373 22.05 25.4436 18.9 27.3598C18.3 27.6546 17.7 27.6546 17.1 27.3598C13.95 25.2962 6.6 19.9899 6 14.0939C6 14.0939 6 13.7991 6 13.6517C6 10.7038 8.55 8.19798 11.55 8.19798C13.8 8.19798 15.75 9.52457 16.65 11.4408C16.8 12.0303 17.4 12.3251 18 12.3251C18.6 12.3251 19.2 12.0303 19.35 11.4408C20.25 9.52457 22.2 8.19798 24.45 8.19798C27.45 8.19798 30 10.7038 30 13.6517C30 13.7991 30 14.0939 30 14.2413Z"
                  fill={"currentColor"}
                />
              </svg>
            )}
          </button>
          <button className="p-2 transition-all rounded-full hover:bg-accent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.7 33C4.95 33 4.35 32.7 3.75 32.25C3 31.5 2.85 30.45 3.15 29.55L4.65 24.9C3.6 22.8 3 20.4 3 18C3 9.75 9.75 3 18 3C26.25 3 33 9.75 33 18C33 26.25 26.25 33 18 33C15.6 33 13.2 32.4 11.1 31.35L6.45 32.85C6.3 33 6 33 5.7 33ZM12 28.35C13.8 29.4 15.9 30 18 30C24.6 30 30 24.6 30 18C30 11.4 24.6 6 18 6C11.4 6 6 11.4 6 18C6 20.1 6.6 22.2 7.65 24C7.8 24.3 7.95 24.75 7.8 25.2L6.3 29.85L10.95 28.35C10.95 28.35 11.8533 28.2766 12 28.35Z"
                fill="currentColor"
              />
              <path
                d="M17.9996 20.3996C19.3251 20.3996 20.3996 19.3251 20.3996 17.9996C20.3996 16.6741 19.3251 15.5996 17.9996 15.5996C16.6741 15.5996 15.5996 16.6741 15.5996 17.9996C15.5996 19.3251 16.6741 20.3996 17.9996 20.3996Z"
                fill="currentColor"
              />
              <path
                d="M10.65 20.3996C11.9755 20.3996 13.05 19.3251 13.05 17.9996C13.05 16.6741 11.9755 15.5996 10.65 15.5996C9.32452 15.5996 8.25 16.6741 8.25 17.9996C8.25 19.3251 9.32452 20.3996 10.65 20.3996Z"
                fill="currentColor"
              />
              <path
                d="M25.3492 20.3996C26.6747 20.3996 27.7492 19.3251 27.7492 17.9996C27.7492 16.6741 26.6747 15.5996 25.3492 15.5996C24.0237 15.5996 22.9492 16.6741 22.9492 17.9996C22.9492 19.3251 24.0237 20.3996 25.3492 20.3996Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="p-2 transition-all rounded-full hover:bg-accent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5304 8.78487C21.1092 8.9829 20.7362 9.43252 20.7362 10.1301V12.4092C20.7362 13.1455 20.1206 13.7425 19.3612 13.7425H15.1262C9.4717 13.7425 4.50187 18.5726 4.25927 24.8436C6.9791 22.2749 10.5258 20.7998 14.37 20.7998H19.3612C20.1206 20.7998 20.7362 21.3968 20.7362 22.1332V25.6278C20.7362 26.3253 21.1092 26.775 21.5304 26.973C21.9514 27.1709 22.424 27.1317 22.8045 26.7845C22.8046 26.7844 22.8043 26.7847 22.8045 26.7845L31.2474 19.0604C31.9593 18.3245 31.8598 17.237 31.294 16.7397L31.2739 16.7217L22.8048 8.97363C22.8046 8.97344 22.805 8.97381 22.8048 8.97363C22.4244 8.62664 21.9513 8.58695 21.5304 8.78487ZM20.3305 6.38538C21.6866 5.74774 23.4069 5.8604 24.6902 7.03228L33.152 14.7737C34.9897 16.4007 34.8905 19.2406 33.2068 20.9321C33.1919 20.9471 33.1766 20.9617 33.161 20.9759L24.6911 28.7248C23.4078 29.8966 21.6866 30.0101 20.3305 29.3725C18.9745 28.7348 17.9862 27.3612 17.9862 25.6278V23.4665H14.37C10.2007 23.4665 6.39293 25.621 4.04999 29.3591C3.72975 29.87 3.09792 30.1117 2.50418 29.9505C1.91045 29.7892 1.5 29.2644 1.5 28.6665V25.3239C1.5 17.5447 7.61433 11.0758 15.1262 11.0758H17.9862V10.1301C17.9862 8.39664 18.9745 7.02301 20.3305 6.38538Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="p-2 transition-all rounded-full hover:bg-accent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.1508 21.4502C24.0008 21.4502 21.3008 24.0002 21.3008 27.3002C21.3008 30.4502 23.8508 33.1502 27.1508 33.1502C30.3008 33.1502 33.0008 30.6002 33.0008 27.3002C33.0008 24.0002 30.4508 21.4502 27.1508 21.4502ZM27.1508 30.0002C25.6508 30.0002 24.3008 28.8002 24.3008 27.1502C24.3008 25.6502 25.5008 24.3002 27.1508 24.3002C28.6508 24.3002 30.0008 25.5002 30.0008 27.1502C30.0008 28.8002 28.8008 30.0002 27.1508 30.0002Z"
                fill="currentColor"
              />
              <path
                d="M16.0497 15.6C16.1997 15.6 16.4997 15.6 16.6497 15.45L22.6497 12.45C23.6997 13.8 25.3497 14.7 27.1497 14.7C30.4497 14.55 32.9997 12 32.9997 8.85C32.9997 5.7 30.4497 3 27.1497 3C23.9997 3 21.2997 5.55 21.2997 8.85C21.2997 9.15 21.2997 9.45 21.4497 9.75L15.2997 12.75C14.5497 13.2 14.2497 14.1 14.6997 14.7C14.8497 15.3 15.4497 15.6 16.0497 15.6ZM27.1497 6C28.6497 6 29.9997 7.2 29.9997 8.85C29.9997 10.35 28.7997 11.7 27.1497 11.7C25.6497 11.7 24.2997 10.5 24.2997 8.85C24.4497 7.2 25.6497 6 27.1497 6Z"
                fill="currentColor"
              />
              <path
                d="M20.55 22.5004L14.4 19.5004C14.55 19.0504 14.55 18.6004 14.55 18.0004C14.55 14.8504 12 12.1504 8.7 12.1504C5.4 12.1504 3 14.8504 3 18.0004C3 21.1504 5.55 23.8504 8.85 23.8504C10.5 23.8504 12 23.2504 13.05 22.0504L19.35 25.2004C19.5 25.3504 19.8 25.3504 19.95 25.3504C20.55 25.3504 21 25.0504 21.3 24.4504C21.6 23.8504 21.3 22.9504 20.55 22.5004ZM8.85 20.8504C7.2 20.8504 6 19.5004 6 18.0004C6 16.5004 7.2 15.1504 8.85 15.1504C10.35 15.1504 11.7 16.3504 11.7 18.0004C11.55 19.5004 10.35 20.8504 8.85 20.8504Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="py-2">
          <p className="text-sm text-neutral-500">55 replies • 3,248 likes </p>
        </div>
      </div>
    </div>
  );
}

export default Thread;
