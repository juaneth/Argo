import { FaEye } from "react-icons/fa";
import { Badge } from "~/components/ui/badge";

export default function Page({ params }: { params: { project: string } }) {
  return (
    <div>
      <div className="flex w-full flex-row bg-black p-12">
        <div>
          <div className="flex flex-row items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">Argo</h1>
            <Badge className="flex h-min flex-row gap-2 bg-green-300 hover:bg-green-400">
              <FaEye className="text-lg"></FaEye>0
            </Badge>
          </div>

          <h2 className="opacity-75">Project Description</h2>
        </div>
      </div>
    </div>
  );
}
