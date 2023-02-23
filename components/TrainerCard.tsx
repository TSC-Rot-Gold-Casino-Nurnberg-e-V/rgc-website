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
        <div className="relative w-72 h-72 rounded rounded-md">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover rounded rounded-md"
          />
        </div>
      )}
      <div className="flex-col flex gap-1 max-w-[288px]">
        <div className="font-bold text-xl w-fit">{name}</div>
        <div className="text-gray-500">{licence}</div>
      </div>
    </div>
  );
};
