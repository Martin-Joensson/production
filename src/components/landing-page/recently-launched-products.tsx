import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recetly Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launcehd in the last week. Check back soon for new launches!"
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
