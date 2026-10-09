import Image from "next/image";
import { organizations } from "@/data/organizations";

export default function OrganizationLogo({
  organization,
}: {
  organization: keyof typeof organizations;
}) {
  const brand = organizations[organization];

  return (
    <div
      className={`organization-logo${brand.darkSurface ? " organization-logo-dark" : ""}`}
      data-organization={organization}
    >
      <Image
        src={brand.logo}
        width={brand.width}
        height={brand.height}
        sizes="128px"
        alt=""
      />
    </div>
  );
}
