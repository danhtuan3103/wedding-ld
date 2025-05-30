import Wish from "../pages/wish";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Tất cả lời chúc dành cho Linh - Dung`,
    openGraph: {
      images: [
        "https://res.cloudinary.com/do6sozxbo/image/upload/v1748609871/wedding-linh-dung/hi3",
        ...previousImages,
      ],
    },
  };
}
function Page() {
  return <Wish />;
}

export default Page;
