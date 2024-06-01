import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function Page({ params }: { params: { project: string } }) {
  return (
    <div className="background flex grow flex-row">
      <div className="flex w-full flex-col">
        <div className="bordered-b flex flex-col items-center gap-3 p-12">
          <h1 className="w-full text-start text-2xl font-semibold tracking-tight">
            Votes
          </h1>
        </div>

        <div className="bordered-b flex flex-col items-center gap-3 p-12">
          <h1 className="w-full text-start text-2xl font-semibold tracking-tight">
            Fixes
          </h1>
        </div>
      </div>

      <div className="bordered-l bordered-b flex w-[56rem] flex-col items-center gap-5 p-12">
        <h1 className="w-full text-start text-2xl font-semibold tracking-tight">
          Images
        </h1>
        <div className="w-full px-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className=" flex w-full max-w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <h1>Hi</h1>
              </CarouselItem>
              <CarouselItem></CarouselItem>
              <CarouselItem></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
