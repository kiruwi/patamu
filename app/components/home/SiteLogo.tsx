import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/images/logo.svg?v=4"
      alt="Patamu logo"
      width={300}
      height={120}
      className={className}
      priority={priority}
    />
  );
}
