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
        <div className="bordered-b flex flex-col items-center gap-3 p-8">
          <h1 className="w-full text-start text-2xl font-semibold tracking-tight">
            Votes
          </h1>
        </div>

        <div className="bordered-b flex flex-col items-center gap-3 p-8">
          <h1 className="w-full text-start text-2xl font-semibold tracking-tight">
            Fixes
          </h1>
        </div>
      </div>
    </div>
  );
}
