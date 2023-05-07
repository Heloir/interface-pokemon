import { IPokemonData } from "@/interfaces/index";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../loading";

export default function PokemonStatus(props: IPokemonData) {
  return (
    <div className="w-full">
      <div className="flex relative justify-center pokemon-animation h-[25rem]">
        <div className="z-10 ml-96 w-48 pokemon-img">
            <Image
             src={props.sprite  || 'https://via.placeholder.com/150x150'}
             alt={props.name || 'Loading'}
             width={100}
             height={100}
             loading="lazy"
              />
        </div>

        <div className="font-bold absolute rounded-lg pokemon-name">
          <h1 className="text-9xl text-white">{props.name || 'Loading...'}</h1>
        </div>
      </div>

      <div className="m-10">
        <h2 className="text-3xl font-bold text-stone-900">
          {`Let's`} Go, {props.name || 'Loading...'}!
        </h2>
        <div>
          <h4>Type</h4>
        </div>
      </div>
    </div>
  );
}
