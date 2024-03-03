export default function ProductId({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Hi Product {params.productId} </h1>;
}
