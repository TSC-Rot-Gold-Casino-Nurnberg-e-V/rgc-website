"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../../components/Button";
import { ChevronLeft } from "../../../components/icons/ChevronLeft";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="secondary"
      startIcon={<ChevronLeft />}
    >
      zurück
    </Button>
  );
};
