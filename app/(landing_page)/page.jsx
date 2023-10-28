import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <Image src="/images/fulllogo.png" height={200} width={400} />
      <div>This will be landing page</div>
    </div>
  );
}
