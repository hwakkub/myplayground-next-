export default function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      Hi review {params.reviewId} product {params.productId}
    </div>
  );
}
