import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
            {" "}
            <Link href="/create">Create News</Link>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <Card className="col-span-12 h-[300px] w-full sm:col-span-5">
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
                src="https://nextui.org/images/card-example-6.jpeg"
              />
              <CardFooter className="border-t-1 absolute bottom-0 z-10 justify-between border-zinc-100/50 bg-white/30">
                <div>
                  <p className="text-tiny text-black">Available soon.</p>
                  <p className="text-tiny text-black">Get notified.</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
