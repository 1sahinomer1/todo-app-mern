function HidedEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_16:2541)">
        <path
          d="M19.392 7.85a13.222 13.222 0 00-2.809-3.258l2.334-2.334a.833.833 0 00-1.179-1.178l-2.537 2.54A10.045 10.045 0 0010 2.213c-5.16 0-8.1 3.532-9.393 5.637a4.09 4.09 0 000 4.302 13.221 13.221 0 002.81 3.257l-2.334 2.334a.833.833 0 101.179 1.178l2.543-2.543A10.046 10.046 0 0010 17.787c5.16 0 8.1-3.531 9.392-5.636a4.09 4.09 0 000-4.302zM2.027 11.277a2.432 2.432 0 010-2.556C3.14 6.917 5.652 3.879 10 3.879a8.416 8.416 0 013.972.971l-1.678 1.677a4.16 4.16 0 00-5.767 5.767L4.602 14.22a11.437 11.437 0 01-2.575-2.94zM12.5 10a2.5 2.5 0 01-2.5 2.5 2.46 2.46 0 01-1.07-.25l3.32-3.32c.163.333.248.699.25 1.07zm-5 0A2.5 2.5 0 0110 7.5a2.46 2.46 0 011.07.25l-3.32 3.32A2.46 2.46 0 017.5 10zm10.473 1.278c-1.112 1.805-3.625 4.843-7.973 4.843a8.416 8.416 0 01-3.972-.971l1.678-1.678a4.16 4.16 0 005.766-5.766l1.926-1.925c1.02.825 1.891 1.82 2.575 2.94a2.432 2.432 0 010 2.557z"
          fill="#50C2C9"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_16:2541">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HidedEye;
