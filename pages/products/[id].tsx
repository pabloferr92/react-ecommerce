import { useRouter } from "next/router";
import { DefaultPage } from "../../components/NavMenu/DefaultPage/DefaultPage";

const ProductDetail = (props: any) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <DefaultPage title="default">
        <span>{id}</span>
      </DefaultPage>
    </>
  );
};

export default ProductDetail;
