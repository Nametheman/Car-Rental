import Payment from "@/components/Payment/Payment";
import Supabase from "@/components/Supabase/Supabase";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const id = router.query?.id;
  const [item, setItem] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchCarDetails = async () => {
      if (id) {
        const { data, error } = await Supabase.from("cars")
          .select()
          .eq("id", id)
          .single();
        setItem(data);
        console.log(error, "err");
      }
    };
    fetchCarDetails();
  }, [id]);

  console.log(id);
  return (
    <div className="bg-[#F6F7F9]">
      <Payment item={item} />
    </div>
  );
};

export default Index;
