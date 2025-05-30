export const dynamic = "force-dynamic";
import Invitation from "../pages/invitation";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Thiệp cưới | Form Nhập Tên`,
    openGraph: {
      images: [
        "https://res.cloudinary.com/do6sozxbo/image/upload/v1748609871/wedding-linh-dung/hi3",
        ...previousImages,
      ],
    },
  };
}

function Page() {
  return <Invitation />;
}

export default Page;
