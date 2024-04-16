import BlurPage from "@/components/global/blur-page";
import MediaComponents from "@/components/media";
import { getMedia } from "@/lib/queries";
import React from "react";

type Props = {
  params: { subaccountId: string };
};

const MediaPage = async ({ params }: Props) => {
  const data = await getMedia(params.subaccountId);
  return (
    <BlurPage>
      <MediaComponents data={data} subaccountId={params.subaccountId} />
    </BlurPage>
  );
};

export default MediaPage;
