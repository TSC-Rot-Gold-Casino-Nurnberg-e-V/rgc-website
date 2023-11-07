"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../../components/Button";
import { ChevronLeftIcon } from "../../../components/icons/ChevronLeftIcon";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="secondary"
      startIcon={<ChevronLeftIcon />}
    >
      zurück
    </Button>
  );
};
