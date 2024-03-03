export default function Review({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <div>Hi review of product {params.productId}</div>;
}
