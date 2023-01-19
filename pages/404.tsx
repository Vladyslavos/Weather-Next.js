import React from "react";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return <div className="error">Error 404, you will be redirected</div>;
}
