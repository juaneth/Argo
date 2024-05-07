import { MdMenu } from "react-icons/md";

import { Button } from "~/components/ui/button";

export default function Home() {
  let projectsMockData = [
    {
      displayName: "Avon Project Manager",
      name: "avon-client",
      ownerID: "blagh",
    },
    {
      displayName: "uniSSH",
      name: "unissh",
      ownerID: "blagh2",
    },
  ];

  return (
    <div className="background">
      <Button>Hey</Button>
    </div>
  );
}
