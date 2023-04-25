import Image from "next/image";

interface Props {
  name: string;
  licence: string;
  image: string | undefined;
}

export const TrainerCard = ({ name, licence, image }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {image !== undefined && (
        <div className="relative h-72 w-72 rounded rounded-md">
          <Image
            src={image}
            alt=""
            fill
            className="rounded rounded-md object-cover"
          />
        </div>
      )}
      <div className="flex max-w-[288px] flex-col gap-1">
        <div className="w-fit text-xl font-bold">{name}</div>
        <div className="text-base-500">{licence}</div>
      </div>
    </div>
  );
};
