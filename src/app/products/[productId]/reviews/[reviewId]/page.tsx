import { notFound } from "next/navigation";
export default function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Hi review {params.reviewId} product {params.productId}
    </div>
  );
}
