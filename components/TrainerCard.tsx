import Image from "next/image";

interface Props {
  name: string;
  licence: string;
  image: string | undefined;
}

export const TrainerCard = ({ name, licence, image }: Props) => {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      {image !== undefined && (
        <div className="relative w-20 h-20">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}
      <div>{name}</div>
      <div>{licence}</div>
    </div>
  );
};
