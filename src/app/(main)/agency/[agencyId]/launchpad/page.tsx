import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { CheckCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    agencyId: string;
  };
  searchParams: {
    code: string;
  };
};

const LauchpadPage = async ({ params, searchParams }: Props) => {
  const agencyDetails = await db.agency.findUnique({
    where: { id: params.agencyId },
  });

  if (!agencyDetails) return;

  const allDetailsExist =
    agencyDetails?.address &&
    agencyDetails.agencyLogo &&
    agencyDetails.city &&
    agencyDetails.companyEmail &&
    agencyDetails.companyPhone &&
    agencyDetails.country &&
    agencyDetails.name &&
    agencyDetails.state &&
    agencyDetails.zipCode;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-full max-w-[800px]">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Lets get started!</CardTitle>
            <CardDescription>
              Follow the steps below to get your account setup.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-between items-center border p-4 rounded-lg gap-2">
              <div className="flex md:items-center gap-4 flex-col md:!flex-row">
                <Image
                  src="/appstore.png"
                  alt="app logo"
                  width={80}
                  height={80}
                  className="rounded-md object-contain"
                />
                <p>Save the website as a shortcut on your mobile device</p>
                <Button>Start</Button>
              </div>
            </div>
            <div className="flex justify-between items-center border p-4 rounded-lg gap-2">
              <div className="flex md:items-center gap-4 flex-col md:!flex-row">
                <Image
                  src="/stripelogo.png"
                  alt="Stripe logo"
                  width={80}
                  height={80}
                  className="rounded-md object-contain"
                />
                <p>
                  Connect your stripe account to accept payments and see your
                  dashboard.
                </p>
                <Button>Start</Button>
              </div>
            </div>
            <div className="flex justify-between items-center border p-4 rounded-lg gap-2">
              <div className="flex md:items-center gap-4 flex-col md:!flex-row">
                <Image
                  src={agencyDetails.agencyLogo}
                  alt="Agency logo"
                  width={80}
                  height={80}
                  className="rounded-md object-contain"
                />
                <p>Fill in all your business details</p>
                {allDetailsExist ? (
                  <CheckCheckIcon
                    size={50}
                    className="text-primary p-2 flex-shrink-0"
                  />
                ) : (
                  <Link
                    href={`/agency/${params.agencyId}/settings`}
                    className="bg-primary py-2 px-4 rounded-md text-white"
                  >
                    Start
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LauchpadPage;
