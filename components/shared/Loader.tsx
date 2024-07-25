"use client";

import { TailSpin } from "react-loader-spinner";

const Loader = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <>
      <TailSpin
        visible={true}
        height={height || 20}
        width={width || 20}
        color={color || "#000"}
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  );
};

export default Loader;
