function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_16:2527)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2.212c5.16 0 8.1 3.532 9.392 5.637a4.09 4.09 0 010 4.302C18.1 14.256 15.16 17.788 10 17.788c-5.16 0-8.1-3.532-9.392-5.637a4.09 4.09 0 010-4.302C1.9 5.744 4.84 2.212 10 2.212zm0 13.909c4.35 0 6.862-3.038 7.972-4.843a2.431 2.431 0 000-2.556C16.862 6.913 14.349 3.879 10 3.879c-4.35 0-6.862 3.038-7.972 4.843a2.432 2.432 0 000 2.556c1.11 1.805 3.623 4.843 7.972 4.843zM7.685 6.536a4.167 4.167 0 114.63 6.928 4.167 4.167 0 01-4.63-6.928zm.926 5.543A2.5 2.5 0 1011.39 7.92 2.5 2.5 0 008.61 12.08z"
          fill="#50C2C9"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_16:2527">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Eye;
